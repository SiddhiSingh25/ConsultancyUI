// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { MdEmail } from "react-icons/md";
// import { IoIosCall } from "react-icons/io";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdOutlineMailOutline } from "react-icons/md";

// // import { IoIosArrowRoundForward } from "react-icons/io";

// export default function Navbar() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <>

//             {/* Top Banner */}
//             <div className="w-full bg-primary-800 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-3 gap-0">
//                 {/* Contact Info */}
//                 <p className="text-center md:text-left text-sm md:text-base">
//                     <a
//                         href="mailto:unmatchedconsultancy@gmail.com"
//                         className="inline-flex items-center gap-1 hover:text-secondary-500 transition"
//                     >
//                         <MdEmail className="text-secondary-500 text-xl" />
//                         unmatchedconsultancy@gmail.com
//                     </a>

//                     <br className="md:hidden" />

//                     <a
//                         href="tel:+919650773891"
//                         className="inline-flex items-center gap-1 ml-2 hover:text-secondary-500 transition"
//                     >
//                         <IoIosCall className="text-secondary-500 text-xl" />
//                         +91 9910678889
//                     </a>
//                 </p>


//                 <div className="hidden md:flex items-center gap-1 px-3 py-1 rounded-lg  ml-3 md:ml-5">
//                     <Link href="/" >
//                         <IoLogoLinkedin className="text-secondary-500 inline text-xl hover:text-secondary-600 transition active:scale-95" />
//                     </Link>
//                     <Link href="/" >
//                         <MdOutlineMailOutline className="text-secondary-500 inline text-xl hover:text-secondary-600 transition active:scale-95" />
//                     </Link>
//                     <Link href="/" >
//                         <FaXTwitter className="text-secondary-500 inline text-xl hover:text-secondary-600 transition active:scale-95" />
//                     </Link>
//                     <Link href="/" >
//                         <FaInstagram className="text-secondary-500 inline text-xl hover:text-secondary-600 transition active:scale-95" />
//                     </Link>
//                 </div>

//             </div>



//        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 transition-all">
//   <div className="flex items-center justify-between h-[72px]">

//     {/* Logo – untouched */}
//     <Link href="/" className="flex items-center">
//       <div className="relative h-20 sm:h-11 md:h-20 w-[120px] sm:w-[140px] md:w-[160px]">
//         <Image
//           src="/images/logo.png"
//           alt="Company Logo"
//           fill
//           priority
//           sizes="(max-width: 640px) 80px,
//           (max-width: 768px) 140px,
//           160px"
//           className="object-contain"
//         />
//       </div>
//     </Link>

//     {/* Desktop Menu */}
//     <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
//       {[
//         ["Home", "/"],
//         ["About Us", "/about"],
//         ["Our Services", "/services"],
//         ["Team", "/team"],
//         ["Blogs", "/blogs"],
//         ["FAQ's", "/faq"],
//       ].map(([label, href]) => (
//         <li key={label} className="relative group">
//           <Link
//             href={href}
//             className="text-gray-700 hover:text-primary-900 transition"
//           >
//             {label}
//           </Link>
//           {/* underline animation */}
//           <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary-900 transition-all duration-300 group-hover:w-full" />
//         </li>
//       ))}

//       {/* CTA */}
//       <li>
//         <Link
//           href="/contact"
//           className="ml-4 inline-flex items-center rounded-full bg-primary-900 px-5 py-2 text-white text-sm font-semibold hover:bg-primary-700 transition shadow-sm"
//         >
//           Contact Us
//         </Link>
//       </li>
//     </ul>

//     {/* Mobile Button */}
//     <button
//       aria-label="menu-btn"
//       type="button"
//       className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition"
//       onClick={toggleMobileMenu}
//     >
//       <svg width="26" height="26" viewBox="0 0 30 30" fill="#000">
//         <path d="M3 7h24M3 15h24M3 23h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     </button>
//   </div>

//   {/* Mobile Menu */}
//   <div
//     className={`md:hidden overflow-hidden transition-all duration-300 ${
//       isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//     }`}
//   >
//     <ul className="flex flex-col gap-4 py-6 text-sm font-medium">
//       {[
//         ["Home", "/"],
//         ["About Us", "/about"],
//         ["Our Services", "/services"],
//         ["Team", "/team"],
//         ["Blogs", "/blogs"],
//         ["FAQ's", "/faq"],
//         ["Contact Us", "/contact"],
//       ].map(([label, href]) => (
//         <li key={label}>
//           <Link
//             href={href}
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="block rounded-lg px-4 py-3 hover:bg-primary-50 hover:text-primary-900 transition"
//           >
//             {label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// </nav>

//         </>
//     );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* ------------------ Animations (same style) ------------------ */

 const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const mobileItem = {
  hidden: { opacity: 0, y: -8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};


  return (
    <>
      {/* Top Banner */}
      <motion.div
        variants={fadeDown}
        initial="hidden"
        animate="show"
        className="w-full bg-primary-800 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-3 gap-0"
      >
        <p className="text-center md:text-left text-sm md:text-base">
          <a
            href="mailto:unmatchedconsultancy@gmail.com"
            className="inline-flex items-center gap-1 hover:text-secondary-500 transition"
          >
            <MdEmail className="text-secondary-500 text-xl" />
            unmatchedconsultancy@gmail.com
          </a>

          <br className="md:hidden" />

          <a
            href="tel:+919650773891"
            className="inline-flex items-center gap-1 ml-2 hover:text-secondary-500 transition"
          >
            <IoIosCall className="text-secondary-500 text-xl" />
            +91 9910678889
          </a>
        </p>

        <div className="hidden md:flex items-center gap-2">
          {[IoLogoLinkedin, MdOutlineMailOutline, FaXTwitter, FaInstagram].map(
            (Icon, i) => (
              <Link key={i} href="/">
                <Icon className="text-secondary-500 text-xl hover:text-secondary-600 transition active:scale-95" />
              </Link>
            )
          )}
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        variants={fadeDown}
        initial="hidden"
        animate="show"
        className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-20 sm:h-11 md:h-20 w-[120px] sm:w-[140px] md:w-[160px]">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Services", "/services"],
              ["Team", "/team"],
              ["Blogs", "/blogs"],
              ["FAQ's", "/faq"],
            ].map(([label, href]) => (
              <li key={label} className="relative group">
                <Link
                  href={href}
                  className="text-gray-700 hover:text-primary-900 transition"
                >
                  {label}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary-900 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center rounded-full bg-primary-900 px-5 py-2 text-white text-sm font-semibold hover:bg-primary-700 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="26" height="26" viewBox="0 0 30 30">
              <path
                d="M3 7h24M3 15h24M3 23h24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="md:hidden flex flex-col gap-4 py-6 text-sm font-medium"
            >
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Services", "/services"],
                ["Team", "/team"],
                ["Blogs", "/blogs"],
                ["FAQ's", "/faq"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <motion.li key={label} variants={mobileItem}>
                  <Link
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 hover:bg-primary-50 hover:text-primary-900 transition"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
