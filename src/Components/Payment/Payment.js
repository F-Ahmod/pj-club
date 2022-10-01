import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
  } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Ln3tdCYxFpCkKrArs9ZGZP6LhGyOOaU5r1IMnuUYMwqa944iM0l0TJIS5rPAthZ2KzTV2YygxCBYKem90jmQ5N700s3hCgQu3");

function Payment() {
  const { planId } = useParams();
  const [plan, setPlan] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/planDetails/${planId}`)
      .then((data) => data.json())
      .then((res) => setPlan(res));
  }, [planId]);

  // useEffect(() => {
  //     fetch(`http://localhost:5000/planDetails/${planId}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))

  // fetch('http://localhost:5000/planDetails', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ _id:planId}),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // },[planId])
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pi_3Ln5DUCYxFpCkKrA0WkmXV2E_secret_QXRkDBweACmUI4S9dFzFAXjIf',
  };
  return (
    <div>
      <h5>Please payment for {plan.title}</h5>
      <h5>Cost {plan.fee }</h5>

      {plan?.fee > 0 && (
        <Elements stripe={stripePromise} options={options}>
            
          <CheckoutForm plan={plan} price={plan?.fee} />
        </Elements>
      )}
    </div>
  );
}

export default Payment;
