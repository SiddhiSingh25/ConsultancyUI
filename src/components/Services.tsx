"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "../data/services-data";
import Heading from "./common/Heading";
import type { Variants } from "framer-motion";


type ServiceProp = {
  limit?: number;
};

/* ------------------ Minimal Scroll Animations ------------------ */

const sectionVariants : Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const containerVariants :Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants : Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* ------------------ Component ------------------ */

export default function Services({ limit }: ServiceProp) {
  const VisibleServices = limit
    ? servicesData.slice(0, limit)
    : servicesData;

  return (
    <motion.section
      className="py-16 px-4 md:px-16 lg:px-24 xl:px-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Heading */}
      <motion.div variants={cardVariants}>
        <Heading
          label="Service"
          title="What we Offer"
          description={`Expert accounting, taxation, and advisory services designed to help
          businesses grow with clarity and confidence.`}
        />
      </motion.div>

      {/* Cards */}
      <motion.div
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {VisibleServices.map(({ id, icon: Icon, title, description }) => (
          <motion.div key={id} variants={cardVariants}>
            <Link href={`/services/${id}`} className="block h-full">
              <article
                className="
                  h-full rounded-2xl border border-slate-200 bg-white p-8
    transition-shadow duration-200
    hover:shadow-lg
                "
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-50">
                  <Icon className="text-secondary-500 text-2xl" />
                </div>

                {/* Content */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {description}
                  </p>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
