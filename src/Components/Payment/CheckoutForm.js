import React, { useEffect, useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Alert } from "react-bootstrap";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import useFirebase from "../../Firebase/useFirebase";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useFirebase();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [process, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  console.log(price);
  useEffect(() => {
    fetch("http://localhost:5000/createPayment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log(data.clientSecret);
      });
  }, [price]);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
    //   return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
    //   return;
    }
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setSuccess("");
      setError(error.message);
    } else {
      setError("");
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
    } else {
      setError("");
      setSuccess("your payment is done");
      setProcessing(false);

      // save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        isPaid: "true",
        transsaction: paymentIntent.client_secret.slice("_secret")[0],
      };

      // const uri = `https://whispering-ridge-34346.herokuapp.com/cartProducts/${user.email}`
      // fetch(uri, {
      //     method: 'PUT',
      //     headers: {
      //         'content-type': 'application/json'
      //     },
      //     body: JSON.stringify(payment)
      // })
      //     .then(res => res.json())
      //     .then(data => {

      //     })
    }
  };

  return (
    <>
      <h1>{error}</h1>
      <form
        onSubmit={HandleSubmit}
        className="bg-primary"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* <CardElement
          options={{
            style: {
              base: {
                fontSize: "26px",
                color: "white",
                "::placeholder": {
                  color: "white",
                },
              },
              invalid: {
                color: "white",
              },
            },
          }}
        /> */}
        <PaymentElement />

        <br />
        <br />
        <br />
        {process && !error ? (
          <h6>Loading....</h6>
        ) : (
          <button onClick={HandleSubmit} className="mt-3"  disabled={!stripe}>
            Pay $ {price}
          </button>
        )}

        {success && (
          <Alert className="my-2" severity="success">
            {success}
          </Alert>
        )}
        {error && (
          <Alert className="my-2" severity="error">
            {error}
          </Alert>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
