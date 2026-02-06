"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { teamData } from "../data/teams-data.js";
import Heading from "./common/Heading";
import type { Variants } from "framer-motion";

type TeamProps = {
  limit?: number;
};

/* ------------------ SAME ANIMATION AS SERVICES ------------------ */

const sectionVariants : Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
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

const cardVariants : Variants = {
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

/* ------------------ Component ------------------ */

export default function Team({ limit }: TeamProps) {
  const visibleTeam = limit
    ? teamData.slice(0, limit)
    : teamData;

  return (
    <motion.section
      className="py-16 px-4 md:px-16 lg:px-24 xl:px-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <Heading
        label="Team"
        title="Meet Our Team"
        description="A dynamic team delivering unmatched business solutions."
      />

      {/* Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        
      >
        {visibleTeam.map((team, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-10 text-center">
              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto">
                <Image
                  src={team.image}
                  alt={team.name}
                  fill
                  sizes="96px"
                  className="rounded-full object-cover shadow-md"
                />
              </div>

              {/* Content */}
              <h2 className="mt-4 text-xl font-bold md:font-medium text-gray-800">
                {team.name}
              </h2>

              <p className="text-sm text-primary font-medium">
                {team.role}
              </p>

              <p className="text-sm text-gray-500 mt-3">
                {team.bio}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-5 text-secondary-500">
                <Link
                  href="/"
                  className="bg-secondary-50 p-2 rounded-full hover:bg-secondary-200 transition"
                >
                  <LiaLinkedinIn />
                </Link>
                <Link
                  href="/"
                  className="bg-secondary-50 p-2 rounded-full hover:bg-secondary-200 transition"
                >
                  <MdEmail />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
