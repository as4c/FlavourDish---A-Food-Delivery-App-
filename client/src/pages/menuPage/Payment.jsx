import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../hooks/useCart";

const Payment = () => {
  const [cart] = useCart();

  //   calculate final price
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = parseFloat(cartTotal.toFixed(2));

  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    const loadStripePromise = async () => {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);
      setStripePromise(stripe);
    };

    loadStripePromise();
  }, []);

  // Render the component only when stripePromise is resolved
  if (!stripePromise) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
