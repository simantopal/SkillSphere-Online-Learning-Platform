"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import avatar from "@/assets/Avatar.png";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <motion.div
      initial={{ y: -30, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-base-300 shadow"
    >
      <div className="container mx-auto navbar px-4">

        <div className="md:hidden dropdown">
          <div tabIndex={0} className="btn btn-ghost">
            ☰
          </div>

          <ul className="menu dropdown-content bg-base-200 mt-3 p-3 shadow rounded w-52">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/courses">Courses</NavLink></li>
            <li><NavLink href="/profile">My Profile</NavLink></li>

            {user ? (
              <li>
                <button
                  onClick={async () => {
                    await authClient.signOut();
                    router.refresh();
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li><NavLink href="/login">Login</NavLink></li>
            )}
          </ul>
        </div>

        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-purple-500">
            SkillSphere
          </Link>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/profile">My Profile</NavLink>
        </div>

        {isPending ? (
          <span className="loading loading-spinner text-secondary"></span>
        ) : user ? (
          <motion.div
            className="hidden md:flex items-center ml-3 gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-medium text-orange-500">
              Hello, {user.name}
            </h2>

            <img
              src={user?.image || avatar}
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />

            <motion.button
              onClick={async () => {
                await authClient.signOut();
                router.refresh();
                router.push("/");
              }}
              className="btn bg-purple-500 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Logout
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            className="btn bg-purple-500 text-white ml-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/login">Login</Link>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;