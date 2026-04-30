"use client";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {

    return (
        <div className="bg-base-300 shadow">
            <div className="container mx-auto navbar px-4">

                {/* Mobile menu */}
                <div className="md:hidden dropdown">
                    <div tabIndex={0} className="btn btn-ghost">☰</div>
                    <ul className="menu dropdown-content bg-base-200 mt-3 p-3 shadow rounded w-52">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/courses">Courses</NavLink></li>
                        <li><NavLink href="/profile">My Profile</NavLink></li>
                        <li><NavLink href="/login">Login</NavLink></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex-1">
                    <Link href="/" className="text-2xl font-bold text-purple-500">
                        SkillSphere
                    </Link>
                </div>

                {/* Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/courses">Courses</NavLink>
                    <NavLink href="/profile">My Profile</NavLink>

                   
                    <div className="bg-purple-500 text-white">
                        <Link href="/login" className="btn">Login</Link>
                    </div>
            
                </div>
            </div>
        </div>
    );
};

export default Navbar;