'use client';

import React, { useState, useEffect } from "react";
import { sendCheckoutPostRequest } from "../generate/checkout";
import "./App.css";

const ProductDisplay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const redirectUrl = await sendCheckoutPostRequest("Stubborn Attachments", "General", "generate");
      window.location.href = redirectUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form onSubmit={handleCheckout}>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Checkout'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </section>
  );
};

type MessageProps = {
  message: string;
};

const Message = ({ message }: MessageProps) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}
