import React, { Component } from 'react';
import video from '../../assets/videos/homevideo.mp4';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
  
let DirectLinkDiv = Scroll.Link;
const useStyles = makeStyles((theme) => ({
    videoonmobile: {
        border: '3px solid yellow', 
        height: '75vh',
        width: '100%',
        objectFit: 'cover',
        [theme.breakpoints.down("sm")]: {
            height: '40vh',
        }
    }
}));

const MainSection = () =>{
    const classes = useStyles();

    return(
        <React.Fragment>
                <section className="text-gray-700 body-font">
                    <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 md:mt-0 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <video controls className={classes.videoonmobile}>
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <h1 style={{color: '#fff'}} className="title-font sm:text-4xl text-2xl md:text-3xl mb-4 font-medium text-white-900">Thank You Sir For being with US..
                                
                            <br className="hidden lg:inline-block" />You are making this journey special..
                            </h1>
                            <p style={{color: '#fff'}} className="mb-8 leading-relaxed">Join with us to give wings to your skills.</p>
                            <div class="flex w-full justify-center">
                            <Link to='/signup'>
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Click Here To Register</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )
}
export default MainSection;