import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import Divider from '@material-ui/core/Divider';
import { useState } from "react";
import * as Scroll from 'react-scroll';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

let DirectLinkDiv = Scroll.Link;
const useStyles = makeStyles({
    list: {
        width: 250
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`
    }
});

const SideDrawer = () => {
    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = useState({ right: false });
    
    const Logout = () =>{
        sessionStorage.clear()
        history.push('/')
    }
    const toggleDrawer = (anchor, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ [anchor]: open });
    };

    const sideDrawerList = anchor => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav">
                <ListItem button>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                    <Button onClick={() =>Logout()} variant="contained" color="primary">
                        Logout
                    </Button>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("right", true)}
            >
                <Menu fontSize="large" style={{ color: `black` }} />
            </IconButton>

            <Drawer
                anchor="right"
                open={state.right}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
            >
                {sideDrawerList("right")}
            </Drawer>
        </React.Fragment>
    );
};

export default SideDrawer;
