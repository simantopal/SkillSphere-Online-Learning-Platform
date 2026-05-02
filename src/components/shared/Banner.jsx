"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import hero from "@/assets/herobg.jpg";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="container mx-auto bg-base-300 mt-8 mb-15 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          <motion.h1
            className="text-4xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Upgrade Your Skills Today 🚀
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Learn from Industry Experts and build real-world skills in Web
            Development, Design, Marketing and more.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-primary text-white hover:bg-gray-200"
              >
                Explore Courses
              </motion.button>
            </Link>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-purple-500 border border-white hover:bg-white hover:text-black"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.03 }}
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