import React, {useState, useEffect} from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import styled from 'styled-components';
import CheckoutForm from './CheckoutForm';
import { useGlobalContext } from '../globalContext';
const StripeWrapper = styled.div`
width: 90%;
`;
const stripePromise = loadStripe("pk_test_51IfrSnFRZt7FtZ9TkBwHYG7WiX2nnzMKxEQ9TwQI7qlwjtzofZozvqXRWv4JGYo6KRbMayqiQM1DIIsfWOe5ZBze00aZqB0dnv");

export default function Stripe({clientData}) {
  const [clientSecret, setClientSecret] = useState("");
  const {TotalCost, clientEmail} = clientData;
  let { ClientData } = useGlobalContext();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    localStorage.setItem("ClientOrderData", JSON.stringify(ClientData))
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: TotalCost }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <StripeWrapper className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm clientEmail={clientEmail} />
        </Elements>
      )}
    </StripeWrapper>
  );
}