"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import avatar from "@/assets/Avatar.png";
import { motion } from "framer-motion";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user, isPending, "user");

    return (
        <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
                boxShadow: "0px 10px 30px rgba(0,0,0,0.15)"
            }}
            className="bg-base-300 shadow"
        >
            <div className="container mx-auto navbar px-4">

                {/* Mobile Menu */}
                <div className="md:hidden dropdown">
                    <motion.div
                        tabIndex={0}
                        className="btn btn-ghost"
                        whileTap={{ scale: 0.85, rotate: -10 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        ☰
                    </motion.div>

                    <ul className="menu dropdown-content bg-base-200 mt-3 p-3 shadow rounded w-52">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/courses">Courses</NavLink></li>
                        <li><NavLink href="/profile">My Profile</NavLink></li>
                        <li><NavLink href="/login">Login</NavLink></li>
                    </ul>
                </div>

                {/* Logo */}
                <motion.div
                    className="flex-1"
                    whileHover={{
                        scale: 1.05,
                        textShadow: "0px 0px 8px rgba(168,85,247,0.6)"
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    <Link href="/" className="text-2xl font-bold text-purple-500">
                        SkillSphere
                    </Link>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 items-center">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/courses">Courses</NavLink>
                    <NavLink href="/profile">My Profile</NavLink>
                </div>

                {/* Auth Section */}
                {isPending ? (
                    <span className="loading loading-spinner text-secondary"></span>
                ) : user ? (
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="hidden md:flex items-center ml-3 gap-3"
                    >
                        <h2 className="font-medium text-orange-500">
                            Hello, {user.name}
                        </h2>

                        <motion.img
                            src={user?.image || avatar}
                            alt="User avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                            whileHover={{
                                scale: 1.2,
                                rotate: 5,
                                boxShadow: "0px 0px 12px rgba(168,85,247,0.6)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />

                        <motion.button
                            className="btn bg-purple-500 text-white"
                            whileTap={{ scale: 0.9 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#7c3aed"
                            }}
                        >
                            <Link
                                href="/login"
                                onClick={async () => await authClient.signOut()}
                            >
                                Logout
                            </Link>
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.button
                        className="btn bg-purple-500 text-white ml-3"
                        whileHover={{
                            scale: 1.08,
                            boxShadow: "0px 0px 15px rgba(168,85,247,0.4)"
                        }}
                        whileTap={{ scale: 0.92 }}
                    >
                        <Link href="/login">Login</Link>
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

export default Navbar;