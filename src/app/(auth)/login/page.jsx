"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data)
  }
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLoginFunc = async (data) => {
    console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error)
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-300 shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h1>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "E-mail field is required" })}
              className="input w-full mt-1 px-4 py-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password field is required" })}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <Link href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">Login</button>
        </form>

        <div className="flex items-center gap-2 my-5 mt-2">
          <div className="flex-1 h-px bg-gray-400"></div>
          <p className="text-sm text-gray-500 font-medium">OR</p>
          <div className="flex-1 h-px bg-gray-400"></div>
        </div>

        <button
          className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-base-200 transition mt-2" onClick={handleGoogleSignin}><FcGoogle size={20} />Continue with Google
        </button>

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