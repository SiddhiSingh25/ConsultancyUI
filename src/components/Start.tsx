"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Variants } from "framer-motion";
import Button from "./common/Button";
import SecondaryButton from "./common/SecondaryButton";

/* ------------------ SAME ANIMATION STYLE ------------------ */

const sectionVariants : Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease:[0.16, 1, 0.3, 1],
    },
  },
};

const containerVariants : Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Start() {
  return (
    <motion.section
      className="flex flex-col items-center text-sm bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/bg-with-grid.png')",
      }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.main
        className="flex flex-col items-center max-md:px-2"
        variants={containerVariants}
      >
        {/* Announcement */}
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className=" mt-15 md:mt-32 flex items-center gap-2 border border-primary-800 rounded-full p-1 px-3 text-sm font-medium text-primary family-medium bg-white"
          >
            <span>Unmatched solution of all business problems</span>
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-center text-4xl leading-[68px] md:text-6xl md:leading-[80px] md:max-w-5xl text-primary-900 mt-6 family-mainheading"
        >
          Unmatched Consultancy — Your Trusted Business Partner
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-center text-base text-slate-800 max-w-2xl mt-2"
        >
          Unmatched Consultancy helps startups and businesses stay compliant,
          streamline operations, and grow with confidence, backed by 20+ experts
          supporting businesses globally.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mt-8"
        >
          {/* <Link href="/contact">
            <button className="flex items-center gap-2 bg-secondary-600 hover:bg-secondary-700 text-white active:scale-95 rounded-lg px-7 h-11 transition">
              Get Started
              <FaArrowRightLong className="text-base" />
            </button>
          </Link>

          <Link href="/services">
            <button className="border border-secondary-500 hover:bg-white transition text-secondary-600 active:scale-95 rounded-lg px-8 h-11">
              Our Services
            </button>
          </Link> */}
        <Button
          href="/contact"
          title="Get Started"
        />
        <SecondaryButton
          href="/services"
          title="Our Services"
        />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-18 max-w-[930px] w-full mt-8"
        >
          {[
            { end: 5, label: "Years of Expertise", suffix: "+" },
            { end: 50, label: "Satisfied Clients", suffix: "k+" },
            { end: 20, label: "Projects Completed", suffix: "+" },
            { end: 3, label: "Countries Served", suffix: "+" },
          ].map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="text-center">
              <h2 className="font-medium text-2xl md:text-3xl text-primary-800">
                <CountUp start={0} end={stat.end} duration={2} />{stat.suffix}
              </h2>
              <p className="text-xs md:text-sm text-primary-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
    </motion.section>
  );
}

