"use client";

import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Start() {

  return (
    <section
      className="flex flex-col items-center text-sm bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('./bg-with-grid.png')",
      }}
    >
      {/* Main Hero */}
      <main className="flex flex-col items-center max-md:px-2 min-h-screen">

        {/* Trial / Announcement */}
        <Link
          href="/"
          className="mt-32 flex items-center gap-2 border border-primary-800 rounded-full p-1 pr-3 text-sm font-medium text-primary bg-white"
        >
          <span className="bg-primary-800 text-white text-xs px-3 py-1 rounded-full">
            NEW
          </span>
          <p className="flex items-center gap-1">
            <span>Let’s Build Your Business Together</span>
            <svg
              className="mt-1"
              width="6"
              height="9"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m1 1 4 3.5L1 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </Link>

        {/* Main Heading */}
        <h1 className=" text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-primary-900 mt-6">
          Unmatched Consultancy — Your Trusted Accounting Partner
        </h1>

        {/* Subtext */}
        <p className="text-center text-base text-primary-700 max-w-lg mt-2">
          Unmatched Consultancy helps startups and businesses stay compliant, streamline operations, and grow with confidence, backed by 20+ experts across Delhi NCR.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button className="flex items-center gap-2 bg-primary-800 pointer hover:bg-primary-900 text-white active:scale-95 rounded-lg px-7 h-11">
            Get Started
            <FaArrowRightLong className="text-base" />
          </button>

          <button className="border border-primary-600 active:scale-95 hover:bg-white transition text-primary-600 rounded-lg px-8 h-11">
            Our Services
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-18 max-w-[930px] w-full mt-12">
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-primary-800">16+</h2>
            <p className="text-xs md:text-sm text-primary-500">Years of Expertise</p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-primary-800">5k+</h2>
            <p className="text-xs md:text-sm text-primary-500">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-primary-800">12k+</h2>
            <p className="text-xs md:text-sm text-primary-500">Projects Completed</p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-gray-800">3+</h2>
            <p className="text-xs md:text-sm text-gray-500">Countries Served</p>
          </div>
        </div>

      </main>
    </section>
  );
}
