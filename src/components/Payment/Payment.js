import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../../firestore.js';
import PaymentHeader from './PayHeader.js';
import { notify } from 'react-notify-toast';

const Axios = require('axios');
const Payment = (props) => {
    const history = useHistory();
    const [paymentDone, setpaymentDone] = useState(false)
    useEffect(() => {

        if (sessionStorage.getItem("sessionid") !== props.match.params.id) {
            history.push('/')
        } else { }
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
        const API_URL = 'https://www.momshearts.in/'
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
                    let parsedData = JSON.parse(captureResponse.data)
                    if(parsedData.status === 'captured' && parsedData.captured === true){
                        history.push({ 
                            pathname: '/check-out-pay-ment',
                            state: parsedData
                           });
                    }
                } catch (err) {
                    notify.show('Something Went Wrong', "custom", 4000, { top: '50px',background: '#0E1717', text: "#FFFFFF" })
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
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (
        <React.Fragment>
            <React.Fragment>
                <PaymentHeader />
                <section class="text-gray-700 body-font">
                    <div class="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
                        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://picsum.photos/720/600" />
                        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Thankyou for joining Mom's Heart.</h1>
                            <p class="mb-8 leading-relaxed">To get all exclusive features and interesting updates.Please help us with your contribution.</p>
                            <div class="flex w-full justify-center">
                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => findUsersMatchingEmail()}>Pay Now</button>
                            </div>
                            <div class="flex mt-4">
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </React.Fragment>
    );
}

export default Payment;