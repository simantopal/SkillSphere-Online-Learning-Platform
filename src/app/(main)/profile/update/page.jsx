"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authClient.updateUser({ name, image });
      router.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  if (!session) {
    return <p className="text-center mt-10">Not logged in</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto my-24 p-10 bg-base-200 rounded-xl shadow"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold mb-4 flex justify-center text-orange-500"
      >
        Update Profile
      </motion.h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {image && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex justify-center mb-4"
          >
            <img
              src={image}
              alt="preview"
              className="w-24 h-24 rounded-full object-cover"
            />
          </motion.div>
        )}

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Your name"
          className="input input-bordered w-full bg-base-100 text-base-content"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Image URL"
          className="input input-bordered w-full bg-base-100 text-base-content"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            onClick={() => router.push("/profile")}
            className="btn btn-outline w-1/2 text-red-500"
          >
            Cancel
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="btn btn-primary w-1/2"
          >
            Save Changes
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default UpdateProfilePage;