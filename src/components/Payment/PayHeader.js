import {
    AppBar,
    Container,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Toolbar,
    Fab
} from "@material-ui/core";
import { Home, KeyboardArrowUp } from "@material-ui/icons";
import * as React from "react";
import SideDrawer from "./PaySidebar.js";
import * as Scroll from 'react-scroll';
import logo from '../../assets/img/momslogo.jpg';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

let DirectLinkDiv = Scroll.Link;
const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navListDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    }
});

const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    const Logout = () =>{
        sessionStorage.clear()
        history.push('/')
    }

    return (
        <>
            <AppBar color='inherit' position="fixed">
                <Toolbar component="nav">
                    <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                        <IconButton edge="start" aria-label="home">
                            <a href="/" style={{ color: `black`, textDecoration: 'none' }}>
                                {/* <Home fontSize="large" /> */}
                                <img style={{ width: '200px', borderRadius: '10px' }} src={logo} />
                            </a>
                        </IconButton>

                        <Hidden smDown>
                            <List
                                component="nav"
                                aria-labelledby="main navigation"
                                className={classes.navListDisplayFlex}
                            >
                                <ListItem button>
                                    <ListItemText>
                                        <Button onClick={() =>Logout()} variant="contained" color="primary">
                                            Logout
                                        </Button>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Hidden>
                        <Hidden mdUp>
                            <SideDrawer />
                        </Hidden>
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </>
    );
};

export default Header;
