import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactWhatsapp from 'react-whatsapp';
const GetInTouch = () =>{
    return(
        <React.Fragment>
                <div class="text-center mb-16 md:mb-20">
                <h3 class="text-3xl sm:text-5xl md:text-4xl md:mt-16 leading-normal font-extrabold  tracking-tight text-gray-900 text-center mb-0 mt-8 sm:mb-16">
                GET IN <span class="text-indigo-600"> TOUCH WITH US</span>
                        </h3>
                    {/* <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Get In Touch With Us</h1> */}
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Feel free to get in touch with us.</p>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <section class="text-gray-700 body-font" data-aos="fade-right">
                    <div class="container px-5 md:py-8 mx-auto">
                        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 class="flex-grow sm:pr-16 text-center md:text-left text-2xl font-medium title-font text-gray-900">Still if you have queries connect directly with us</h1>
                            <ReactWhatsapp number="919324098389" message="Hello !!!">
                            <button class="flex-shrink-0 text-white ml-24 md:ml-0 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                                Get In Touch
                            </button>
                            </ReactWhatsapp>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    )
}

export default GetInTouch;