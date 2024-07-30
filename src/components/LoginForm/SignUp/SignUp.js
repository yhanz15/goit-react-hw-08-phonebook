import React, { useMemo } from 'react';
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Checkbox,
  createTheme,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormLabel,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormHelperText from '@mui/material/FormHelperText';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';

import { StyledErrorMessage, StyledSpanTitle } from './SignUp.styled';
import { selectTheme } from 'redux/userTheme/slice';
import { grey } from '@mui/material/colors';

const initialValues = {
  name: '',
  email: '',
  gender: '',
  number: '',
  password: '',
  confirmPassword: '',
  termAndConditions: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'It`s too short').required('Required*'),
  email: Yup.string().email('Enter valid email').required('Required*'),
  gender: Yup.string()
    .oneOf(['male', 'female'], 'Required*')
    .required('Required*'),
  number: Yup.number()
    .typeError('Enter valid phone number')
    .required('Required*'),
  password: Yup.string()
    .min(8, 'Password minimum length should be 8')
    .required('Required*'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password not matched')
    .required('Required*'),
  termAndConditions: Yup.string().oneOf(['true'], 'Accept terms & conditions'),
});

const SignUp = () => {
  const userTheme = useSelector(selectTheme);

  const colorGender = userTheme === 'light' ? 'rgb(105, 105, 105)' : '#ffffff';

  const paperStyle = {
    padding: '20px',
    minHeight: '72vh',
    width: 320,
    margin: '0 auto',
  };

  const avatarStyle = { backgroundColor: '#1bbd7e' };

  const dispatch = useDispatch();

  const onSubmit = (values, props) => {
    const { name, email, password } = values;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
      values.termAndConditions = false;
    }, 2000);
  };

  const inputProps = {};

  const mode = userTheme;
  let theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode,
        primary: {
          main: 'rgb(32, 139, 74)',
          ...(mode === 'dark' && {
            main: 'rgb(49, 189, 126)',
          }),
        },
        ...(mode === 'dark' && {
          background: {
            default: '#101d2b',
            paper: '#101d2b',
          },
        }),
        text: {
          ...(mode === 'light'
            ? {
                primary: grey[900],
                secondary: grey[800],
              }
            : {
                primary: '#fff',
                secondary: grey[500],
              }),
        },
      },
    });
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Paper style={paperStyle} sx={{ fontSize: 16 }}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <StyledSpanTitle
              style={{ display: 'block', width: '100%', marginTop: '12px' }}
            >
              Sign Up
            </StyledSpanTitle>
            <Typography variant="caption">
              Please fill this form to create an account
            </Typography>
          </Grid>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {props => (
              <Form>
                <Field
                  as={TextField}
                  sx={{ mt: 3 }}
                  id="outlined-basic-name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  type="text"
                  placeholder="Enter name"
                  fullWidth
                  inputProps={inputProps}
                />
                <StyledErrorMessage name="name" component="span" />
                <Field
                  as={TextField}
                  sx={{ mt: 3 }}
                  id="outlined-basic-email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Enter email"
                  type="email"
                  fullWidth
                />
                <StyledErrorMessage name="email" component="span" />
                {/*======= Radio =========*/}
                <FormControl
                  style={{ marginTop: '8px', width: '100%' }}
                  component="fieldset"
                >
                  <FormLabel
                    component="legend"
                    sx={{
                      color: colorGender,
                      '&.Mui-focused': { color: '#47a76a' },
                    }}
                  >
                    Gender
                  </FormLabel>
                  <Field
                    as={RadioGroup}
                    aria-labelledby="gender"
                    id="outlined-basic-gender"
                    name="gender"
                    style={{ display: 'initial' }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </Field>
                </FormControl>
                <FormHelperText>
                  <StyledErrorMessage name="gender" component="span" />
                </FormHelperText>

                <Field
                  as={TextField}
                  sx={{ mt: 3 }}
                  id="outlined-basic-number"
                  label="Phone Number"
                  name="number"
                  variant="outlined"
                  type="tel"
                  placeholder="Enter phone number"
                  fullWidth
                />
                <StyledErrorMessage name="number" component="span" />
                <Field
                  as={TextField}
                  sx={{ mt: 3 }}
                  id="reg-password"
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  placeholder="Enter password"
                  fullWidth
                  autoComplete="on"
                />
                <StyledErrorMessage name="password" component="span" />
                <Field
                  as={TextField}
                  sx={{ mt: 3 }}
                  id="conf-password"
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  placeholder="Confirm password"
                  fullWidth
                  autoComplete="on"
                />
                <StyledErrorMessage name="confirmPassword" component="span" />

                <Field
                  as={FormControlLabel}
                  control={<Checkbox />}
                  label="I accept the terms and conditions."
                  name="termAndConditions"
                  sx={{ width: '100%', mt: '12px' }}
                />
                <FormHelperText>
                  <StyledErrorMessage
                    name="termAndConditions"
                    component="span"
                  />
                </FormHelperText>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  color="primary"
                >
                  {props.isSubmitting ? 'Loading' : 'Sign up'}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default SignUp;
