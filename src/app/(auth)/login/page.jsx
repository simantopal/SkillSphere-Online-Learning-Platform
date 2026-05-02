"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Google Login
  const handleGoogleSignin = async () => {
    if (googleLoading) return;

    try {
      setGoogleLoading(true);

      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Google login failed!");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Email Login
  const handleLoginFunc = async (formData) => {
    if (loading) return; // 🛑 prevent spam clicks

    try {
      setLoading(true);

      const { error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Login failed!");
      } else {
        toast.success("Login successful!");
        router.push("/");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-base-300 shadow-xl rounded-2xl p-8"
      >

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome Back 👋
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-px bg-gray-400"></div>
          <p className="text-sm text-gray-500">OR</p>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignin}
          disabled={googleLoading}
          className={`w-full flex items-center justify-center gap-3 border py-2 rounded-lg transition ${
            googleLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-base-200"
          }`}
        >
          <FcGoogle size={20} />
          {googleLoading ? "Please wait..." : "Continue with Google"}
        </button>

        {/* Register */}
        <p className="text-center text-sm mt-5">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default LoginPage;