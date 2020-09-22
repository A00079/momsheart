import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <section class="text-gray-700 body-font" id="aboutus">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="text-center mb-20">
                        <h3 class="text-3xl sm:text-5xl md:text-4xl md:mt-16 leading-normal font-extrabold  tracking-tight text-gray-900 text-center mb-0 mt-0  sm:mb-16">
                            ABO<span class="text-indigo-600">UT</span>
                        </h3>
                            {/* <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">About</h1> */}
                            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">As we all know that every person have some unique Talent/Skills
So we are here for you to share your unique skills in front of world
and we will improve it in best way...</p>
                            <div class="flex mt-6 justify-center">
                                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                        </div>
                        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            <div class="p-4 md:w-1/2 md:mb-0 mb-6 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow pl-6" data-aos="fade-right">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">What we do??</h2>
                                    <p class="leading-relaxed text-base">It is Online Competition Platform where every age group including kids can show their talent.</p>
                                    {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                            <div class="p-4 md:w-1/2 md:mb-0 mb-6 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex-grow pl-6" data-aos="fade-right">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Why us?</h2>
                                    <p class="leading-relaxed text-base">1)We will provide winning amount to TOP 3 winners of each age categories<br />
2)For all participants we are going to give 5 Options of online classes/Workshop through professional teachers,
    so each participants will choose one and learn<br />
3)Our every participants is also going to have Casting updates for Advertise Shoots,Serials,WebSeries.
</p>
                                    {/* <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default About;