import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

const Axios = require('axios');

const Payment = () => {
    const history = useHistory();

    const paymentHandler = async (e) => {
        const API_URL = 'http://localhost:5000/'
        e.preventDefault();
        const orderUrl = `${API_URL}order`;
        const response = await Axios.get(orderUrl);
        const { data } = response;
        const options = {
            key: 'rzp_test_YrnOpH7uVFOaai',
            name: "MoM's Heats",
            description: "Subscribtion fee.",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture/${paymentId}`;
                    const captureResponse = await Axios.post(url, {})
                    history.push("/review");
                    console.log(captureResponse.data);
                } catch (err) {
                    console.log(err);
                }
            },
            theme: {
                color: "#686CFD",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    return (
        <React.Fragment>
            <section class="text-gray-700 body-font">
                <div class="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://picsum.photos/720/600" />
                    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Thankyou for joining MoM's Heart.</h1>
                        <p class="mb-8 leading-relaxed">To get all exclusive features and interesting updates.Please help us with your contribution.</p>
                        <div class="flex w-full justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={paymentHandler}>Pay Now</button>
                        </div>
                        <div class="flex mt-4">
                            {/* <button class="bg-gray-200 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">
                                <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                </svg>
                                <span class="ml-4 flex items-start flex-col leading-none">
                                    <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                                    <span class="title-font font-medium">Google Play</span>
                                </span>
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Payment;