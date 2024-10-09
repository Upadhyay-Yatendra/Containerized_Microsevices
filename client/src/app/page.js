"use client";

import { useState } from "react"; // Import useState to manage the loading state

export default function Home() {
  const [submitting, setSubmitting] = useState(false); // State to track if submission is in progress

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true); // Set submitting to true when the form is submitted
    try {
      const data = {
        name: event.target.name.value,
        email: event.target.email.value,
      };
      const response = await fetch("http://localhost:4000/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false); // Reset submitting to false after the submission is complete
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form onSubmit={handleSubmit} className="bg-zinc-950">
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required // Added required attribute for better user input validation
          />
        </label>
        <label className="block mb-4">
          <span className="block text-sm font-medium text-gray-700">Email:</span>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required // Added required attribute for better user input validation
          />
        </label>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-amber-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:hover:bg-indigo-600"
          disabled={submitting} // Disable button while submitting
        >
        {/* added a comment here to check if docker watch is working fine */}
          {submitting ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}
