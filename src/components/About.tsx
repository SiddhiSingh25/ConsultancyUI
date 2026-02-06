// "use client";

// import Image from 'next/image'
// import Heading from './common/Heading'
// import { usePathname } from "next/navigation";
// import Button from './common/Button'


// const About = () => {

//     let pathname = usePathname()
//     return (
//         <div className='py-8'>

//             <Heading title={"About Us"} description={"Providing expert accounting, taxation, and advisory services."} />

//             <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-24 flex flex-col xl:flex-row items-center justify-center gap-10">

//                 {/* Left Image Card */}
//                 <div className="relative  shadow-2xl shadow-primary-300 rounded-2xl overflow-hidden shrink-0">
//                     <Image
//                         src="/images/about/about.png"
//                         alt="Unlimited Consultancy Team"
//                         width={400}
//                         height={300}
//                         className="max-w-md w-full object-cover rounded-2xl"
//                         priority
//                     />

//                     {/* Floating Community Card */}
//                     <div className="hidden absolute bottom-8 left-8 bg-white p-4 rounded-xl md:flex  items-center gap-3 max-w-lg">
//                         <div className="flex -space-x-4">
//                             {[
//                                 "/images/about/user-1.png",
//                                 "/images/about/user-2.png",
//                                 "/images/about/user-3.png",
//                             ].map((src, i) => (
//                                 <Image
//                                     key={i}
//                                     src={src}
//                                     alt="Team member"
//                                     width={36}
//                                     height={36}
//                                     className="rounded-full border-[3px] border-white hover:-translate-y-1 transition"
//                                 />
//                             ))}
//                             <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-primary-800 hover:-translate-y-1 transition">
//                                 20+
//                             </div>
//                         </div>
//                         <p className="text-sm font-medium text-primary-800">
//                             Trusted by growing businesses
//                         </p>
//                     </div>
//                 </div>

//                 {/* Right Content */}
//                 <div className="text-base text-slate-800 max-w-lvh">
//                     <h1 className="text-xl uppercase font-semibold text-primary-700">
//                         What we do?
//                     </h1>

//                     <p className="mt-4">
//                         Unmatched Consultancy is a trusted business advisory and financial services firm dedicated to helping entrepreneurs, startups, and established organizations build, manage, and grow their businesses with confidence.
//                     </p>

//                     <p className="mt-4">
//                         We simplify complex business processes, ensure statutory compliance, and deliver practical, growth-focused solutions tailored to each client’s needs.
//                     </p>

//                     <p className="mt-4">
//                         Backed by a team of 20+ experienced professionals with strong technical and financial expertise, we treat every client’s business as our own. Headquartered in Delhi, with offices in Gurugram and Noida, we deliver reliable, transparent, and timely services across all stages of the business lifecycle.
//                     </p>

//                     {pathname != "/about" ? (
//                         <Button title="Know more" href="/about" />
//                     ) : (<Button title="Back to home" href="/" />)}




//                 </div>
//             </section>



//         </div>
//     )
// }

// export default About

"use client";

import Image from "next/image";
import Heading from "./common/Heading";
import { usePathname } from "next/navigation";
import Button from "./common/Button";
import { motion, type Variants } from "framer-motion";

/* ------------------ Animations ------------------ */

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.1,
    },
  },
};

const floatCardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    },
  },
};

/* ------------------ Component ------------------ */

const About = () => {
  const pathname = usePathname();

  return (
    <motion.div
      className="py-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading
        label="Know Us Better"
        title="About Us"
        description="Providing expert accounting, taxation, and advisory services."
      />

      <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-24 flex flex-col xl:flex-row items-center justify-center gap-10">
        {/* Left Image */}
        <motion.div
          variants={imageVariants}
          className="relative shadow-2xl shadow-primary-300 rounded-2xl overflow-hidden shrink-0"
        >
          <Image
            src="/images/about/about.png"
            alt="Unlimited Consultancy Team"
            width={400}
            height={300}
            className="max-w-md w-full object-cover rounded-2xl"
            priority
          />

          {/* Floating Community Card */}
          <motion.div
            variants={floatCardVariants}
            className="hidden absolute bottom-8 left-8 bg-white p-4 rounded-xl md:flex items-center gap-3 max-w-lg"
          >
            <div className="flex -space-x-4">
              {[
                "/images/about/user-1.png",
                "/images/about/user-2.png",
                "/images/about/user-3.png",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Team member"
                  width={36}
                  height={36}
                  className="rounded-full border-[3px] border-white hover:-translate-y-1 transition"
                />
              ))}
              <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-primary-800 hover:-translate-y-1 transition">
                20+
              </div>
            </div>
            <p className="text-sm font-medium text-primary-800">
              Trusted by growing businesses
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={contentVariants}
          className="text-base text-slate-800 max-w-lvh"
        >
          <h1 className="text-xl uppercase font-semibold text-primary-700">
            What we do?
          </h1>

          <p className="mt-4">
            Unmatched Consultancy is a trusted business advisory and financial
            services firm dedicated to helping entrepreneurs, startups, and
            established organizations build, manage, and grow their businesses
            with confidence.
          </p>

          <p className="mt-4">
            We simplify complex business processes, ensure statutory compliance,
            and deliver practical, growth-focused solutions tailored to each
            client’s needs.
          </p>

          <p className="mt-4 mb-4">
            Backed by a team of 20+ experienced professionals with strong
            technical and financial expertise, we treat every client’s business
            as our own.
          </p>

          {pathname !== "/about" ? (
            <Button title="Know more" href="/about" />
          ) : (
            <Button title="Back to home" href="/" />
          )}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
