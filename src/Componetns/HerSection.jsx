"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20 md:py-28 rounded-2xl my-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Discover & Connect with
          <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#0092b8] to-orange-500">
            {" "}Local Clubs
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Join amazing communities around you, attend events, and grow your
          passion. ClubSphere helps you connect with clubs that match your
          interests.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          
          {/* Join a Club */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/Clubs"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#0092b8] text-white rounded-xl shadow-md text-sm sm:text-base font-medium"
            >
              Join a Club
            </Link>
          </motion.div>

          {/* Grab Your Seat */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/Events"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 border border-gray-300 rounded-xl shadow-md text-sm sm:text-base font-medium"
            >
              Grab Your Seat!
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
