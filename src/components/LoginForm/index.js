import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.svg';

export default function LoginForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [flag, setFlag] = useState(0);

  const validateForm = (event) => {
    event.preventDefault();
    
    // Add validation code here
   
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const email = data.get('email');
    const password = data.get('password');
    console.log(password);
 var validator = require("email-validator");
    const hasUpperCase = /[A-Z]/.test(password);
    // Check if the password contains at least one lowercase letter
    const hasLowerCase = /[a-z]/.test(password);
    // Check if the password contains at least one digit
    const hasDigit = /\d/.test(password);
    // Check if the password contains at least one special character (e.g., !@#$%^&*)
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
    const length = password.length>=8;
    console.log(hasUpperCase, hasLowerCase, hasDigit, length);

    if (hasDigit && hasUpperCase && hasLowerCase && hasSpecialCharacter &&length && validator.validate(email)) {
    setShowAlert(true);
      setAlertMessage("Login Successful");
    } else {
      setShowAlert(true);
      setAlertMessage("Password Incorrect");
    }
    
  };

  return (
    <>
      {showAlert && (
        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
        >
          <Alert onClose={() => setShowAlert(false)} severity={flag === 1 ? "success" : "error"}>
            {alertMessage}
          </Alert>
        </Snackbar>
      )}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{
            my: 2
          }}>
            <img src={logo} width="147" alt="harrison.ai" />
          </Box>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
