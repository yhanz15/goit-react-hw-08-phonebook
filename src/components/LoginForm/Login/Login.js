import React, { useMemo, useState } from 'react';
import {
  Avatar,
  Paper,
  Grid,
  Checkbox,
  Button,
  Typography,
  Link,
  createTheme,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledErrorMessage } from './Login.styled';
import { selectTheme } from 'redux/userTheme/slice';
import OutlinedInput from '@mui/material/OutlinedInput';
import { grey } from '@mui/material/colors';
import { TextField, FormControlLabel } from '@mui/material';

const initialValues = {
  email: '',
  password: '',
  remember: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('Required*'),
  password: Yup.string().required('Required*'),
});

const SignIn = ({ handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const userTheme = useSelector(selectTheme);

  const paperStyle = {
    padding: 20,
    minHeight: '50vh',
    width: 320,
    margin: '0 auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e', marginBottom: '16px' };
  const btnstyle = { margin: '8px 0' };

  const dispatch = useDispatch();

  const onSubmit = (values, props) => {
    const { email, password } = values;

    dispatch(logIn({ email, password }));

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // MUI Theme
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
    <>
      <ThemeProvider theme={theme}>
        <Grid>
          <Paper style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <span>Sign in</span>
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
                    sx={{
                      mt: 3,
                    }}
                    id="basic-email"
                    name="email"
                    label="Login"
                    variant="outlined"
                    placeholder="Enter email"
                    type="email"
                    fullWidth
                  />
                  <StyledErrorMessage name="email" component="span" />
                  <FormControl
                    sx={{
                      mt: 2,
                      width: '100%',
                    }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>

                    <Field
                      as={OutlinedInput}
                      name="password"
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      autoComplete="on"
                    />
                  </FormControl>
                  <StyledErrorMessage name="password" component="span" />
                  <Field
                    as={FormControlLabel}
                    control={<Checkbox />}
                    label="Remember me"
                    name="remember"
                    sx={{ width: '100%' }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    variant="contained"
                    disabled={props.isSubmitting}
                    style={btnstyle}
                  >
                    {props.isSubmitting ? 'Loading' : 'Sign in'}
                  </Button>
                </Form>
              )}
            </Formik>

            <Link
              sx={{ width: '100%' }}
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Forgot password ?
            </Link>

            <Typography
              variant="body2"
              sx={{ mr: 1, d: 'inline' }}
              component="span"
            >
              Do you have an account ?
            </Typography>
            <Link
              component="button"
              variant="body2"
              onClick={() => handleChange('event', 1)}
            >
              Sign Up
            </Link>
          </Paper>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default SignIn;
