"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (formData) => {
    if (loading) return; // 🛑 prevent spam clicks

    try {
      setLoading(true);

      const { email, name, photo, password } = formData;

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: photo,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "User already exists");
        return;
      }

      toast.success("Signup successful 🎉");

      setTimeout(() => {
        router.push("/login");
      }, 1000);

    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-base-200 px-4"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-base-300 shadow-xl rounded-2xl p-8"
      >

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h1>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm font-medium">Photo URL</label>
            <input
              type="text"
              placeholder="Enter photo URL"
              {...register("photo", { required: "Photo is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

      </motion.div>
    </motion.div>
  );
};

export default RegisterPage;