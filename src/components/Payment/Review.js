import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
  const classes = useStyles();
  useEffect(() => {
    console.log('rewiew', props.paydetails)
  }, [props])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment summary
      </Typography>
      <List disablePadding>
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Entity'} ></ListItemText>
          <Typography variant="body2">{props.paydetails.entity}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Amount'} ></ListItemText>
          <Typography variant="body2">{props.paydetails.amount}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Currency'} ></ListItemText>
          <Typography variant="body2">{props.paydetails.currency}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Status'} ></ListItemText>
          <Typography variant="body2">{props.paydetails.status}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Method'} ></ListItemText>
          <Typography variant="body2">{props.paydetails.method}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText secondary={'Description'} ></ListItemText>
          <Typography variant="body2">{props.paydetails.description}</Typography>
        </ListItem>
        {/* <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $34.06
          </Typography>
        </ListItem> */}
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
          <Link to='/'>
            <Button variant="contained" color="primary">
              Back To Home
          </Button>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}