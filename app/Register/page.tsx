"use client";


import React from "react";
import { useState } from "react";

const Register = () => {

    interface Errors {
        name?: string;
        email?: string;
        mobile?: string;
        city?: string;
        password?: string;
        confirmPass?: string;
        gender?: string;
      }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const [output, setOutput] = useState("");


  const handleSubmit = () => {
    const newErrors: Errors = {};
    
    // Validation checks
    if (!name) {
      newErrors.name = "Name is required.";
    }
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!mobile) {
      newErrors.mobile = "Mobile number is required.";
    }
    if (!city) {
      newErrors.city = "City is required.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }
    if (password !== confirmPass) {
      newErrors.confirmPass = "Passwords do not match.";
    }
    if (!gender) {
      newErrors.gender = "Gender is required.";
    }
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      // Successful form submission logic
      console.log("Form submitted successfully!");
      console.log({ name, email, mobile, city, gender });
  
      // Show success message
      setOutput("Registration successful!");
  
      // Clear form fields
      setName("");
      setEmail("");
      setMobile("");
      setCity("");
      setPassword("");
      setConfirm("");
      setGender("");
    } else {
      console.log("Form has errors:", newErrors);
    }
  };

  return (
  
    <section className=" py-16 relative overflow-hidden container mx-auto w-full" id="about">
    <video
      className="absolute inset-0 object-cover z-0 h-full w-full "
      src="/video3.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>
      {/* Hero Section */}
      
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
  <div className="text-center relative z-0 flex flex-col justify-center bg-black bg-opacity-80 shadow-lg w-[750px] mx-64">
    <h1 className="text-4xl text-white text-center font-bold font-serif pt-4 ml-6">
      Register Here
    </h1>

    {/* Registration Form */}
    <div className="flex justify-center w-full py-20">
      <div className="w-full max-w-lg bg-white bg-opacity-45 py-8 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center mb-4">Create Your Account</h2>
        <form>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 text-left ml-7 font-mono font-semibold">Full Name:</label>
            <input
              type="text"
              className="w-[400px] p-2 border rounded"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 text-left ml-7 font-mono font-semibold">Email Address:</label>
            <input
              type="email"
              className="w-[400px] p-2 border rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-700 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold font-mono text-left ml-7">Phone Number:</label>
            <input
              type="tel"
              className="w-[400px] p-2 border rounded"
              placeholder="Enter your phone number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && <p className="text-red-700 text-sm">{errors.mobile}</p>}
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold font-mono ml-7 text-left">City:</label>
            <select
              className="w-[400px] p-2 border rounded"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Choose your city</option>
              <option value="indore">Indore</option>
              <option value="bhopal">Bhopal</option>
              <option value="satna">Satna</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>
            {errors.city && <p className="text-red-700 text-sm">{errors.city}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 font-mono font-semibold text-left ml-7">Password:</label>
            <input
              type="password"
              className="w-[400px] p-2 border rounded"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-700 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block mb-1 font-mono font-semibold text-left ml-7">Confirm Password:</label>
            <input
              type="password"
              className="w-[400px] p-2 border rounded"
              placeholder="Confirm your password"
              value={confirmPass}
              onChange={(e) => setConfirm(e.target.value)}
            />
            {errors.confirmPass && <p className="text-red-700 text-sm">{errors.confirmPass}</p>}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold font-mono">Gender:</label>
            <div className="flex gap-4">
              <label className="flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="flex items-center ml-4">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
            {errors.gender && <p className="text-red-700 text-sm">{errors.gender}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-[400px] bg-blue-500 text-white py-2 rounded"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        {output && <p className="mt-4 text-white">{output}</p>}
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default Register;
