"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const [name, setName] = useState(session?.user?.name || "");
  const [image, setImage] = useState(session?.user?.image || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await authClient.updateUser({ name, image, });
      router.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  if (!session) {
    return <p className="text-center mt-10">Not logged in</p>;
  }

  return (
    <div className="max-w-xl mx-auto my-24 p-10 bg-base-200 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4 flex justify-center text-orange-500">
        Update Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {image && (
          <div className="flex justify-center mb-4">
            <img
              src={image}
              alt="preview"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        )}

        <input
          type="text"
          placeholder="Your name"
          className="input input-bordered w-full bg-base-100 text-base-content"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered w-full bg-base-100 text-base-content"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <div className="flex gap-3">
          <button type="button" onClick={() => router.push("/profile")} className="btn btn-outline w-1/2 text-red-500">
            Cancel
          </button>

          <button type="submit" className="btn btn-primary w-1/2">
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
};

export default UpdateProfilePage;