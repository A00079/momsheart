import React, {useEffect} from 'react';
import Header from '../components/Header/Header.js';
import MainSection from '../components/MainSection/MainSection.js';
import About from '../components/About/About.js';
import GetInTouch from '../components/GetInTouch/GetInTouch.js';
import Contact from '../components/Contact/Contact.js';
import Footer from '../components/Footer/Footer.js';
import SignUp from '../views/SignUp.js';
import SignIn from '../views/SignIn.js';

import Aos from 'aos';
import 'aos/dist/aos.css';
const LandingScreen = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    })
    return (
        <React.Fragment>
            <Header />
            {/* <div class="relative h-screen w-full mt-2 flex items-center justify-center bg-cover bg-center text-center" style={{ backgroundImage: "url(https://i.postimg.cc/KcBfdgnb/web-back.jpg)" }}> */}
            <div id='home' class="relative h-screen w-full mt-2 flex items-center justify-center bg-cover bg-center text-center" style={{ backgroundColor: "black"}}>
                <div class="z-50  w-full ">
                    <div className="main-section z-50 ">
                        <MainSection />
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="main-about">
                <About />
            </div>
            <div data-aos="fade-up" className="main-about">
                <GetInTouch />
            </div>
            {/* <div  className=" md:mt-24">
                <SignUp />
            </div>
            <div  className=" md:mt-24">
                <SignIn />
            </div> */}
            <div  className=" md:mt-24">
                <Contact />
            </div>
            <div className="main-footer">
                <Footer />
            </div>
        </React.Fragment >
    )
}

export default LandingScreen;