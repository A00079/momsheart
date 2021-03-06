import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const history = useHistory();
  const classes = useStyles();

  const handelLogout = () =>{
    sessionStorage.clear()
    window.location = "/";
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment summary
      </Typography>
      <List disablePadding>
        {/* <ListItem className={classes.listItem}>
          <ListItemText secondary={'Amount'} ></ListItemText>
          <Typography variant="body2">{Number(props.paydetails.amount) * 1/100}</Typography>
        </ListItem> */}
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Status'} ></ListItemText>
          <Typography variant="body2">{props.paydetails.status === 'captured'?<span className='text-green-700'> SUCCESS</span>  : <span className='text-red-700'> UNSUCCESS</span>}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Method'} ></ListItemText>
          <Typography variant="body2" style={{textTransform:'uppercase'}}>{props.paydetails.method}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Description'} ></ListItemText>
          <Typography variant="body2">{props.paydetails.description}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Amount" />
          <Typography variant="subtitle1" className={classes.total}>
          <span className='text-blue-700'> {Number(props.paydetails.amount) * 1/100}</span>
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{'Order ID'}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{props.paydetails.order_id}</Typography>
              </Grid>
            </React.Fragment>

            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{'Email'}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{props.paydetails.email}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{'Contact'}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{props.paydetails.contact}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={12}>
          
            <Button onClick={() =>{handelLogout()}} variant="contained" color="primary">
              Back To Home
          </Button>
          
        </Grid>
      </Grid>
    </React.Fragment>
  );
}