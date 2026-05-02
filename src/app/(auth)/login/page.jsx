"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();

  const handleGoogleSignin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
    }
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (formData) => {
    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed!");
    } else {
      toast.success("Login successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-base-300 shadow-xl rounded-2xl p-8"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-center mb-6"
        >
          Welcome Back 👋
        </motion.h1>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
          onSubmit={handleSubmit(handleLoginFunc)}
        >
          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email field is required",
              })}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.email.message}
              </motion.p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password field is required",
              })}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.password.message}
              </motion.p>
            )}
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

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Login
          </motion.button>
        </motion.form>

        {/* OR Divider */}
        <div className="flex items-center gap-2 my-5 mt-2">
          <div className="flex-1 h-px bg-gray-400"></div>
          <p className="text-sm text-gray-500 font-medium">OR</p>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        {/* Google Login */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGoogleSignin}
          className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-base-200 transition mt-2"
        >
          <FcGoogle size={20} />
          Continue with Google
        </motion.button>

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