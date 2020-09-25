import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from "../../src/firestore.js";
import { useHistory } from "react-router-dom";
import { notify } from 'react-notify-toast';
import { Link } from 'react-router-dom';


function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        @Team Pratham
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [location, setlocation] = useState('');
  const [age, setage] = useState('');
  const [phone_number, setphone_number] = useState('');
  const [skills, setskills] = useState('');
  const [password, setpassword] = useState('');

  const handelfirstname = (value) => {
    setfirst_name(value.target.value)
  }
  const handellastname = (value) => {
    setlast_name(value.target.value)
  }
  const handelemail = (value) => {
    setemail(value.target.value)
  }
  const handellocation = (value) => {
    setlocation(value.target.value)
  }
  const handelage = (value) => {
    setage(value.target.value)
  }
  const handelphoneno = (value) => {
    setphone_number(value.target.value)
  }
  const handelskills = (value) => {
    setskills(value.target.value)
  }
  const handelpassword = (value) => {
    setpassword(value.target.value)
  }
  const handelOnSubmit = () => {
    if(!!first_name && !!last_name && !!email && !!location && !!age && !!phone_number && !!skills && !!password){
      const db = firebase.firestore();
      db.settings({});

    firebase.auth().createUserWithEmailAndPassword(email, password).then((u) => {
    }).then((u) => { 
      const userRef = db.collection('users').add({
        first_name: first_name,
        last_name: last_name,
        email: email,
        location: location,
        age: age,
        phone_number: phone_number,
        skills: skills
      });
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('email').value = '';
      document.getElementById('age').value = '';
      document.getElementById('skill').value = '';
      document.getElementById('location').value = '';
      document.getElementById('phoneno').value = '';
      document.getElementById('password').value = '';
      notify.show('You are successfully Registration. Please contact us for more information.', "custom", 4000,{top: '50px'}, { background: '#0E1717', text: "#FFFFFF" })
      history.push("/signin");
    })
    .catch((error) => {
      window.alert(error.message)
    })
    }else{
      notify.show('All fields are mandatory.', "custom", 4000, { top: '50px',background: '#0E1717', text: "#FFFFFF" })
    }
  }
  return (
    <Container  maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} id="signUp">
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handelfirstname(e)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handellastname(e)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handelemail(e)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => handelage(e)}
                variant="outlined"
                required
                fullWidth
                id="age"
                type='number'
                label="Age"
                name="age"
                autoComplete="age"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => handelskills(e)}
                variant="outlined"
                required
                fullWidth
                id="skill"
                label="Skills"
                name="skill"
                autoComplete="skill"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => handellocation(e)}
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(e) => handelphoneno(e)}
                variant="outlined"
                required
                type='number'
                fullWidth
                id="phoneno"
                label="Phone No."
                name="phoneno"
                autoComplete="phoneno"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handelpassword(e)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            onClick={() => handelOnSubmit()}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                Already have an account? <Link  to="/signin" variant="body2"><span className='text-blue-700'> Sign in</span></Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
