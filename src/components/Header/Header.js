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
  import BackToTop from "./BackToTop";
  import SideDrawer from "./SideDrawer";
  import * as Scroll from 'react-scroll';
  import MenuList from './MenuList/MenuList.js';
  import logo from '../../assets/img/momslogo.jpg';
  
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
  
    return (
      <>
          <AppBar color='inherit' position="fixed">
            <Toolbar component="nav">
              <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                <IconButton edge="start" aria-label="home">
                  <a href="/" style={{ color: `black`,textDecoration: 'none' }}>
                    {/* <Home fontSize="large" /> */}
                    <img style={{ width: '200px',borderRadius: '10px'}} src={logo} />
                  </a>
                </IconButton>
  
                <Hidden smDown>
                  <List
                    component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navListDisplayFlex}
                  >
                    <DirectLinkDiv
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                    <ListItem button>
                        <ListItemText>
                        
                          Home
                        </ListItemText>
                    </ListItem>
                    </DirectLinkDiv>


                    <DirectLinkDiv
                          to="aboutus"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                    <ListItem button>
                        <ListItemText>
                          About
                        </ListItemText>
                    </ListItem>
                    </DirectLinkDiv>


                    <DirectLinkDiv
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                        >
                    <ListItem button>
                        <ListItemText>
                        
                          Contact
                        
                        </ListItemText>
                    </ListItem>
                    </DirectLinkDiv>
                    <ListItem button>
                        <ListItemText><MenuList /></ListItemText>
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
  
        <BackToTop>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </BackToTop>
      </>
    );
  };
  
  export default Header;
  