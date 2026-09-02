"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { UserContext } from "@/context/user.context";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { setUser} = useContext(UserContext)
  const router = useRouter()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email === "asif@ph.com" && password === "asdf") {
       const newUser = {
      email,
      name: email.split('@')[0]
    }

    setUser(newUser)
    router.push('/services')
    
      Swal.fire({
        title: "Good job!",
        text: "Login successful",
        icon: "success",
      });


      
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Emali password not valid",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      setUser(null)
    }

   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-bold text-gray-900 tracking-tight">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please enter your details to sign in.
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded cursor-pointer transition-colors"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-black transition-colors"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 active:scale-[0.98]"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer / Sign Up */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-semibold text-black hover:underline transition-all"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
