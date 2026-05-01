"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 🔐 Email/Password Login
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (formData.email && formData.password) {
        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem(
          "user",
          JSON.stringify({
            name: "John Doe",
            email: formData.email,
          })
        );

        toast.success("Login Successful 🚀");
        router.push("/");
      } else {
        toast.error("Invalid credentials ❌");
      }

      setLoading(false);
    }, 1000);
  };

  // 🔐 Google Login (Mock)
  const handleGoogleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Google User",
          email: "user@gmail.com",
        })
      );

      toast.success("Logged in with Google 🎉");
      router.push("/");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-300 shadow-xl rounded-2xl p-8">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome Back 👋
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            {loading ? "Loading..." : "Login"}
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
          onClick={handleGoogleLogin}
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