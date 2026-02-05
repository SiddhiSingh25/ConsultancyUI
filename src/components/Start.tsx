"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Start() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      className="flex flex-col items-center text-sm bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/bg-with-grid.png')",
      }}
    >
      {/* Main Hero */}
      {/* <main className="flex flex-col items-center max-md:px-2 min-h-screen"> */}
      <main className="flex flex-col items-center max-md:px-2">


        {/* Trial / Announcement */}
        <Link
          href="/"
          className="mt-32 flex items-center gap-2 border border-primary-400 rounded-full p-1 pr-3 text-sm font-medium text-primary bg-white"
        >
          <span className="bg-secondary-400 text-white text-xs px-3 py-1 rounded-full">
            NEW
          </span>
          <p className="flex items-center gap-1">
            <span>Unmatched solution of all business problems</span>
          </p>
        </Link>

        {/* Main Heading */}
        <h1 className=" text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-primary-900 mt-6">
          Unmatched Consultancy — Your Trusted Business Partner
        </h1>

        {/* Subtext */}
        <p className="text-center text-base text-slate-800 max-w-lg mt-2">
          Unmatched Consultancy helps startups and businesses stay compliant, streamline operations, and grow with confidence, backed by 20+ experts supporting businesses globally.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <Link href="/contact">
         
          <button className="flex items-center gap-2 bg-secondary-600 cursor-pointer hover:bg-secondary-700 text-white active:scale-95 rounded-lg px-7 h-11">
            Get Started
            <FaArrowRightLong className="text-base" />
          </button>
           </Link>

<Link href="/services" className="cursor-pointer" > 

          <button className="border cursor-pointer border-secondary-500 active:scale-95 hover:bg-white transition text-secondary-600 rounded-lg px-8 h-11">
            Our Services
          </button>
          </Link>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-18 max-w-[930px] w-full mt-0 md:mt-8">
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-primary-800">{inView && <CountUp start={0} end={5} duration={2} />}+</h2>
            <p className="text-xs md:text-sm text-primary-500">Years of Expertise</p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-primary-800">{inView && <CountUp start={0} end={50} duration={2} />}k+</h2>
            <p className="text-xs md:text-sm text-primary-500">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-primary-800">{inView && <CountUp start={0} end={20} duration={2} />}+</h2>
            <p className="text-xs md:text-sm text-primary-500">Projects Completed</p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-gray-800">{inView && <CountUp start={0} end={3} duration={2} />}+</h2>
            <p className="text-xs md:text-sm text-gray-500">Countries Served</p>
          </div>
        </div>

      </main>
    </section>
  );
}
