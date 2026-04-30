import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
  <div className="w-full max-w-md bg-base-300 shadow-xl rounded-2xl p-8">

    {/* Title */}
    <h1 className="text-2xl font-bold text-center mb-6">
      Welcome Back 👋
    </h1>

    {/* Form */}
    <form className="space-y-4">

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

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>

        <Link href="#" className="text-blue-600 hover:underline">
          Forgot password?
        </Link>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        Login
      </button>
    </form>

    {/* Divider */}
    <div className="flex items-center gap-2 my-5 mt-2">
      <div className="flex-1 h-px bg-gray-400"></div>
      <p className="text-sm text-gray-500 font-medium">OR</p>
      <div className="flex-1 h-px bg-gray-400"></div>
    </div>

    {/* Google Login */}
    <button
      className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-base-200 transition mt-2"
    >
      <FcGoogle size={20} />
      Continue with Google
    </button>

    {/* Register link */}
    <p className="text-center text-sm mt-5">
      Don’t have an account?{" "}
      <Link href="/register" className="text-blue-600 hover:underline">
        Register
      </Link>
    </p>

  </div>
</div>

    );
};

export default LoginPage;