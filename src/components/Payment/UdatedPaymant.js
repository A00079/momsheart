import React from 'react';
import PaymentLogo from '../../assets/img/PaymentLogo.png';
import PaymentHeader from './PayHeader.js';
import paytm from '../../assets/img/paytm.png';
import google from '../../assets/img/google.png';
import phonepe from '../../assets/img/phonepe.png';


const UpdatedPaymant = () => {
    return (
        <React.Fragment>
            <PaymentHeader />
            <section class="text-gray-700 body-font">
                <div class="container px-5 py-4 mx-auto">
                    <div class="flex flex-wrap w-full mb-0 flex-col items-center text-center">
                        <img width='100px' height='100px' class="  mb-0 object-cover object-center rounded" alt="hero" src={PaymentLogo} />

                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Register With Mom's Heart</h1>
                        <p class="lg:w-1/2 w-full leading-relaxed text-base">Continue to payment to access our all prime feature and benefits and Be prime members of us for 1 Year</p>
                        <p class="lg:w-1/2 w-full leading-relaxed text-base font-black">Kindly share sceenshot after payment</p>
                        <p class="lg:w-1/2 w-full leading-relaxed text-base font-black">Good Wishes</p>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="xl:w-1/3 md:w-1/3 p-4">
                            <div class="border border-gray-300 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <img width='150px' height='150px' class="w-10 h-10 rounded" alt="hero" src={paytm} />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Paytm</h2>
                                <p class="leading-relaxed text-base">Pay us via using paytm.Use this following no. <span className='text-indigo-600 font-black'>8879088315</span></p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/3 p-4">
                            <div class="border border-gray-300 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <img width='150px' height='150px' class="w-10 h-10 rounded" alt="hero" src={google} />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Google Pay</h2>
                                <p class="leading-relaxed text-base">Pay us via using google pay.Use this following no. <span className='text-indigo-600 font-black'>8879088315</span></p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/3 p-4">
                            <div class="border border-gray-300 p-6 rounded-lg">
                                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <img width='150px' height='150px' class="w-16 h-10 rounded" alt="hero" src={phonepe} />
                                </div>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Phone Pay</h2>
                                <p class="leading-relaxed text-base">Pay us via using google pay.Use this following no. <span className='text-indigo-600 font-black'>8879088315</span></p>
                            </div>
                        </div>
                    </div>
                    {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                </div>
            </section>
        </React.Fragment>
    );
}

export default UpdatedPaymant;