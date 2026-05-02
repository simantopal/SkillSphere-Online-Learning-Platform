"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const { data: session, isLoading } = authClient.useSession();

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return <p className="text-center mt-10">You are not logged in.</p>;
  }

  const user = session.user;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto my-24 p-10 bg-base-200 rounded-2xl shadow-lg"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mb-8 text-center text-orange-500"
      >
        My Profile
      </motion.h1>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-6"
      >
        <img
          src={user?.image || "/avatar.png"}
          alt="profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-primary"
        />

        <div>
          <p className="text-2xl font-semibold">{user?.name}</p>
          <p className="text-base opacity-70">{user?.email}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex justify-center"
      >
        <Link href="/profile/update">
          <button className="btn btn-primary px-8">
            Update Profile
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;