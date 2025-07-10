"use client";

import { useState } from "react";

const PaymentCard = () => {
  const [upiId, setUpiId] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!upiId.trim()) {
      setErrorMessage("UPI ID is required.");
      return;
    }

    if (!upiId.includes("@") || upiId.length < 5) {
      setErrorMessage("Please enter a valid UPI ID (e.g., user@bank).");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccessMessage("✅ Payment successful!");
      setUpiId("");
    }, 2000);
  };

  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-xl w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 transition-colors">
        UPI Payment
      </h2>

      <form onSubmit={handlePayment} className="space-y-4">
        <label
          htmlFor="upi"
          className="block text-sm font-medium text-gray-600"
        >
          Enter your UPI ID
        </label>

        <input
          type="text"
          id="upi"
          name="upi"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          placeholder="example@bank"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md font-semibold transition-all duration-200 ${
            loading
              ? "bg-white cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

        {errorMessage && (
          <p className="text-sm text-red-600 mt-1 transition-opacity duration-200">
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p className="text-sm text-green-600 mt-1 transition-opacity duration-200">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default PaymentCard;
