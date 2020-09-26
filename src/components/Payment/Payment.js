import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../../firestore.js';
import PaymentHeader from './PayHeader.js';
import Checkout from  './checkout.js';
const Axios = require('axios');
let rzp1 = null;
const Payment = (props) => {
    const history = useHistory();
    const [isAuth, setisAuth] = useState(false)
    const [paymentDone, setpaymentDone] = useState(false)
    useEffect(() => {

        if (sessionStorage.getItem("sessionid") !== props.match.params.id) {
            history.push('/')
        } else {
            setisAuth(true)
        }
    }, [])
    
    const findUsersMatchingEmail = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const db = firebase.firestore();
                db.collection("users").where("email", "==", user.email)
                    .get()
                    .then(function (querySnapshot) {
                        querySnapshot.forEach(function (doc) {
                            var docRef = db.collection("metadata").doc("razorpay-testing");
                            docRef.get().then(function (razorpay_details) {
                                if (razorpay_details.exists) {
                                    console.log("Document data:", razorpay_details.data());
                                    paymentHandler(doc.data(), razorpay_details.data())
                                } else {
                                    console.log("No such document!");
                                }
                            }).catch(function (error) {
                                console.log("Error getting document:", error);
                            });
                        });
                    })
                    .catch(function (error) {
                        console.log("Error getting documents: ", error);
                    });
            } else {
                // No user is signed in.
            }
        });
    }
    const paymentHandler = async (prefilldata, razorpay) => {
        const API_URL = 'https://momshearts.herokuapp.com/'
        const orderUrl = `${API_URL}order`;
        const response = await Axios.get(orderUrl);
        const { data } = response;
        const options = {
            key: razorpay.key_id,
            name: "Mom's Heart",
            description: "Annual Fee.",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture/${paymentId}`;
                    const captureResponse = await Axios.post(url, {})
                    history.push("/");
                    console.log(captureResponse.data);
                } catch (err) {
                    console.log(err);
                }
            },
            prefill: {
                name: prefilldata.first_name + ' ' + prefilldata.last_name,
                email: prefilldata.email,
                contact: prefilldata.phone_number
            },
            theme: {
                color: "#686CFD",
            },
        };
        rzp1 = null;
        rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <React.Fragment>
            {
                isAuth ?
                    <React.Fragment>
                        <PaymentHeader />
                        {
                            paymentDone ? <Checkout />
                                :
                                <section class="text-gray-700 body-font">
                                    <div class="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
                                        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://picsum.photos/720/600" />
                                        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Thankyou for joining MoM's Heart.</h1>
                                            {/* <p class="mb-8 leading-relaxed">To get all exclusive features and interesting updates.Please help us with your contribution.</p> */}
                                            <div class="flex w-full justify-center">
                                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => findUsersMatchingEmail()}>Pay Now</button>
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
                        }


                    </React.Fragment>
                    :
                    ""
            }

        </React.Fragment>
    );
}

export default Payment;