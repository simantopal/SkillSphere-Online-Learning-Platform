'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const { register, handleSubmit, formState: {errors}} = useForm();
  
    const handleRegisterFunc = async(data) => {
      console.log(data)
      const {email, name, photo, password} = data;

      const {data: res, error} = await authClient.signUp.email({
        name: name,
        email: email,
        password: password,
        image: photo,
        callbackURL: "/"
      })
      console.log(res, error);
      if(error){
        toast.error("User already exist")
      }
      if(res){
        toast.success("SignUp successful")
      }
    }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-300 shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account 🚀</h1>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"              
              {...register("name", {required: "Name field is required"})} />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Photo URL</label>
            <input
              type="text"
              placeholder="Enter your URL"
              {...register("photo", {required: "Photo field is required"})}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {required: "E-mail field is required"})}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {required: "Password field is required"})}
              className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">Register
          </button>
        </form>

        <p className="text-center text-sm mt-5">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;