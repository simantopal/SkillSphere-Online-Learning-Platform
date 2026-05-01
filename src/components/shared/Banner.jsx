"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import hero from "@/assets/herobg.jpg"
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="bg-base-100">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Upgrade Your Skills Today 🚀
          </h1>

          <p className="text-lg lg:text-xl text-gray-500">
            Learn from Industry Experts and build real-world skills in Web
            Development, Design, Marketing and more.
          </p>

          <div className="flex gap-4">
            <Link href="/courses">
              <button className="btn bg-primary text-white hover:bg-gray-200">
                Explore Courses
              </button>
            </Link>

            <Link href="/register">
              <button className="btn bg-purple-500 border border-white hover:bg-white hover:text-black">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={hero}
            alt="banner"
            className="w-full h-120 mx-auto rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}