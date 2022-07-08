import React, {useEffect} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {MdOutlineDangerous} from 'react-icons/md';
import { useGlobalContext } from '../components/globalContext';

const PaymentConfirmPage = styled.div`
width: 100%;
height: 100vh;
background: black;
position: fixed;
z-index: 10000;
color: white;
display: flex;
align-items: center;
justify-content: center;

& > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Slab';

    & > div {
        &:nth-child(1) {
            font-size: 10rem;
        }
        &:nth-child(2) {
            font-size: 3rem;
        }
        &:nth-child(3) {
            font-size: 2rem;
        }
    }
}
.HomePagePaymentCompleteLink {
    font-size: 1.5rem;
    font-family: 'Rubik';
    text-decoration: none;
    color: blue;
}

@media(max-width: 37.5em) {
    & > div {
        & > div {
            &:nth-child(1) {
                font-size: 6rem;
            }
            &:nth-child(2) {
                font-size: 1.5rem;
            }
            &:nth-child(3) {
                font-size: 1rem;
            }
        }
    }
    .HomePagePaymentCompleteLink {
        margin-top: 1rem;
    }
}
`;

const PaymentStripeComplete = () => {
    const arr = window.location.href.split('&');
    const test = /redirect_status/;
    const status = arr.filter((el) => {if(el.match(test)) {return el}});
    const paymentStatus = status[0].split('=')[1];
    const data = localStorage.getItem("ClientOrderData");

    const parsedData = JSON.parse(data);
    
    if(parsedData.TraditionalPaymentNumber !== null) {
        parsedData.TraditionalPaymentNumber = "Paid with Stripe, check your account";
    }

    const ClientData = parsedData;
    
    useEffect(() => {
        if(paymentStatus === 'succeeded') {
            if(localStorage.getItem('CaffeCart')) {
                localStorage.setItem('CaffeCart', JSON.stringify([]));
                fetch("/mail-to-shop", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(ClientData),
                })
            }
        }
        localStorage.setItem("ClientOrderData", JSON.stringify({}))
    }, [])
    return (
        <PaymentConfirmPage>
            <div>
                <div>{paymentStatus === 'succeeded' ? <AiOutlineCheckCircle /> : <MdOutlineDangerous />}</div>
                <div>{paymentStatus === 'succeeded' ? "Thank's for your order!" : "Something went wrong!"}</div>
                <div>{paymentStatus === 'succeeded' ? "Payment success" : "Payment failed"}</div>
                <Link className="HomePagePaymentCompleteLink" to="/">Home Page</Link>
            </div>
        </PaymentConfirmPage>
    )
}

export default PaymentStripeComplete
