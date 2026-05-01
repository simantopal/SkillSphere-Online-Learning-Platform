"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import avatar from "@/assets/Avatar.png"

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user, isPending, "user")

    return (
        <div className="bg-base-300 shadow">
            <div className="container mx-auto navbar px-4">
                <div className="md:hidden dropdown">
                    <div tabIndex={0} className="btn btn-ghost">☰</div>
                    <ul className="menu dropdown-content bg-base-200 mt-3 p-3 shadow rounded w-52">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/courses">Courses</NavLink></li>
                        <li><NavLink href="/profile">My Profile</NavLink></li>
                        <li><NavLink href="/login">Login</NavLink></li>
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


                {isPending ? (<span className="loading loading-spinner text-secondary"></span>) : user ? (
                    <div className="hidden md:flex items-center ml-3 gap-3">
                        <h2 className="font-medium text-orange-500">Hello, {user.name}</h2>
                        <img
                            src={user.image || avatar}
                            alt="User avatar"
                            width={40}
                            height={40}
                            className="rounded-full" />

                        <button className="btn bg-purple-500 text-white" onClick={async() => await authClient.signOut()}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <button className="btn bg-purple-500 text-white ml-3">
                        <Link href="/login">Login</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;