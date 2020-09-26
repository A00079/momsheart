import React, { useState, useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from "../../src/firestore.js";
import { withRouter, Redirect } from "react-router";
import { notify } from 'react-notify-toast';
import { Link } from 'react-router-dom';

function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        @Team Prathams
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

const SignUp = ({ history }) => {
  const classes = useStyles();
  const [useremail, setuesremail] = useState('');
  const [userpassword, setpassword] = useState('');

  const handelemail = (value) => {
    setuesremail(value.target.value)
  }
  const handelpassword = (value) => {
    setpassword(value.target.value)
  }
  const handelOnSubmit = () => {
    if(!!useremail && !!userpassword){
        firebase
          .auth()
          .signInWithEmailAndPassword(useremail, userpassword).then((data) => {
            notify.show('Successfully Logged In.', "custom", 4000,{ background: '#0E1717', text: "#FFFFFF",top: '500px' })
            sessionStorage.setItem("sessionid", data.user.l+data.user.uid);
            history.push("/cash-less-pay-ment/"+data.user.l+data.user.uid);
          }).catch((e) =>{
            notify.show(e.message, "custom", 4000, { background: '#0E1717', text: "#FFFFFF",top: '50px' })
          })
    }else{
      notify.show('All fields are mandatory.', "custom", 4000, { top: '50px',background: '#0E1717', text: "#FFFFFF" })
    }
  }
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} id='signIn'>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handelemail(e)}
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <p variant="body2">
                Don't have an account? <Link to="/signup" className="text-blue-700"> Sign Up</Link>
              </p>
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

export default withRouter(SignUp);