"use client";
import Link from "next/link";

const Navbar = () => {
    const user = null; // later replace with auth

    return (
        <div className="bg-base-200 shadow">
            <div className="max-w-7xl mx-auto navbar px-4">

                {/* Mobile menu */}
                <div className="md:hidden dropdown">
                    <div tabIndex={0} className="btn btn-ghost">☰</div>
                    <ul className="menu dropdown-content bg-base-200 mt-3 p-3 shadow rounded w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        <li><Link href="/my-profile">My Profile</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex-1">
                    <Link href="/" className="text-xl font-bold">
                        SkillSphere
                    </Link>
                </div>

                {/* Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/courses">Courses</Link>
                    <Link href="/my-profile">My Profile</Link>

                    {!user ? (
                        <>
                            <Link href="/login" className="btn btn-sm">Login</Link>
                            <Link href="/register" className="btn btn-sm btn-primary">Register</Link>
                        </>
                    ) : (
                        <>
                            <img
                                src={user?.image}
                                className="w-8 h-8 rounded-full"
                            />
                            <button className="btn btn-sm">Logout</button>
                        </>
                    )}
                </div>



            </div>
        </div>
    );
};

export default Navbar;