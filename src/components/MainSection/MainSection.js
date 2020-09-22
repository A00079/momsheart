import React, { Component } from 'react';
import video from '../../assets/videos/homevideo.mp4';
import { makeStyles } from '@material-ui/core/styles';

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
                        <video className={classes.videoonmobile} autoPlay loop id="video-background">
                                <source src={video} type="video/mp4" />
                            </video>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <h1 style={{color: '#fff'}} className="title-font sm:text-4xl text-2xl md:text-3xl mb-4 font-medium text-white-900">Thank You Sir For being with US..
                                
                            <br className="hidden lg:inline-block" />You are making this journey special..
                            </h1>
                            <p style={{color: '#fff'}} className="mb-8 leading-relaxed">Join with us to give wings to your skills.</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )
}
export default MainSection;