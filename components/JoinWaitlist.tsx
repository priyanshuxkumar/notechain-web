"use client";

import { EmailSchema } from "@/types";
import React, { useState, FormEvent } from "react";

interface JoinWaitlistProps {
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export default function JoinWaitlist({
  buttonText = "Get Notified",
  placeholder = "Enter your email",
  className = "",
}: JoinWaitlistProps) {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    
    const result = EmailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://v1.nocodeapi.com/priyanshukumar/google_sheets/NhrofQiAYHxGeFUm?tabId=Sheet1', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"          
        },
        body: JSON.stringify([[email, new Date().toISOString()]])
      });
      if(response.status === 200) {
        await response.json();
        setIsSuccess(true);
        setEmail("");
      }
    } catch (err) {
      if(err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to join waitlist. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${className}  w-full py-20 md:py-32 text-primary-foreground relative overflow-hidden inset-0 h-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]`}>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Join our Waitlist
          </h2>
          <p className="text-lg text-primary-foreground/80 w-10/12">
            Enter your email and we’ll notify you as soon as we launch. No spam,
            just the good stuff.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-xl"
          >
            <div className="flex-grow relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                aria-label="Email address"
                disabled={isSubmitting || isSuccess}
                className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none disabled:bg-gray-100"
              />
              {error && (
                <p className="text-red-500 text-sm mt-1 absolute left-0">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="px-12 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all disabled:bg-blue-400 sm:whitespace-nowrap"
            >
              {isSubmitting ? "Joining..." : isSuccess ? "Joined!" : buttonText}
            </button>
          </form>

          {isSuccess && (
            <p className="text-black text-sm mt-2">
              Thanks for joining the waitlist! We&apos;ll be in touch soon 🚀
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
