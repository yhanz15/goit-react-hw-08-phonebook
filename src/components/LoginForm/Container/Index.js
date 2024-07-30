import React, { useMemo, useState } from 'react';
import { Box, Tab, Tabs, Typography, Paper, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/userTheme/slice';
import { grey } from '@mui/material/colors';

const AuthUserForm = () => {
  const [value, setValue] = useState(0);
  const userTheme = useSelector(selectTheme);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component="span">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  // Theme
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
        <Paper sx={{ width: '320px', m: '30px auto' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab
              label="Sign In"
              sx={{
                ml: 'auto',
                mr: 'auto',
                width: '50%',
              }}
            />
            <Tab
              label="Sign Up"
              sx={{ ml: 'auto', mr: 'auto', width: '50%' }}
            />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <Login handleChange={handleChange} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <SignUp />
          </CustomTabPanel>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default AuthUserForm;
