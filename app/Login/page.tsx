"use client";


import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logged in with", { email, password });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Banner */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="hidden md:flex flex-1 flex-col items-center justify-center bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 text-white relative overflow-hidden"
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to TrioHub</h1>
        <p className="text-lg px-10 text-center max-w-md mb-8 drop-shadow-md">
          Analyze the Indian stock market, trade, and grow with TrioHub. Empowering your financial journey.
        </p>
        <motion.img
          src="/login.jpg" 
          alt="Stock Market Banner"
          className="w-[70%] md:w-[50%] mb-10"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        <div className="absolute bottom-8 text-sm text-gray-200 italic">
          Empowering your financial journey.
        </div>
      </motion.div>

      {/* Login Form */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-1 flex-col justify-center items-center bg-white px-6 md:px-20 relative">
        <h2 className="text-4xl font-bold text-sky-500 mb-6">Log In to TrioHub</h2>
        <form className="w-full max-w-sm">
          {/* Email Input */}
          <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 py-4">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          {/* Password Input */}
          <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 py-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </motion.div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleLogin}
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-md shadow-lg hover:shadow-xl focus:outline-none transition-transform duration-200"
          >
            Log In
          </motion.button>
        </form>

        {/* Footer */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-sm text-gray-600"
        >
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
