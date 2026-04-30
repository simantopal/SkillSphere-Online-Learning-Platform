import Link from 'next/link';
import React from 'react';

const RegisterPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
  <div className="w-full max-w-md bg-base-300 shadow-xl rounded-2xl p-8">

    {/* Title */}
    <h1 className="text-2xl font-bold text-center mb-6">
      Create Account 🚀
    </h1>

    {/* Form */}
    <form className="space-y-4">

      {/* Name */}
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="text-sm font-medium">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Terms */}
      <div className="flex items-center gap-2 text-sm">
        <input type="checkbox" />
        <p>I agree to the Terms & Conditions</p>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        Register
      </button>
    </form>

    {/* Login link */}
    <p className="text-center text-sm mt-5">
      Already have an account?{" "}
      <Link href="/login" className="text-blue-600 hover:underline">
        Login
      </Link>
    </p>

  </div>
</div>
    );
};

export default RegisterPage;