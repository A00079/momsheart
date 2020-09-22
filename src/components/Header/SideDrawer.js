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
    const [state, setState] = useState({ right: false });

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
                        <DirectLinkDiv
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            About
                    </DirectLinkDiv>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <DirectLinkDiv
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Contact
                        </DirectLinkDiv>
                    </ListItemText>
                </ListItem>
                {/* <Divider />
                <ListItem button>
                    <ListItemText>
                        <DirectLinkDiv
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Sign In
                    </DirectLinkDiv>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText>
                        <DirectLinkDiv
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            Sign Up
                    </DirectLinkDiv>
                    </ListItemText>
                </ListItem> */}
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
