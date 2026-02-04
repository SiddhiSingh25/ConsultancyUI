"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

// import { IoIosArrowRoundForward } from "react-icons/io";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>

            {/* Top Banner */}
            <div className="w-full bg-primary-800 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-3 gap-0">
                {/* Contact Info */}
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
                        +91 9650773891
                    </a>
                </p>


                <div className="hidden md:flex items-center gap-1 px-3 py-1 rounded-lg  ml-3">
                    <Link href="/" >
                        <IoLogoLinkedin className="text-secondary-500 inline text-xl hover:text-secondary-600 transition active:scale-95" />
                    </Link>
                    <Link href="/" >
                        <MdOutlineMailOutline className="text-secondary-500 inline text-xl hover:text-secondary-600 transition active:scale-95" />
                    </Link>
                    <Link href="/" >
                        <FaXTwitter className="text-secondary-500 inline text-xl hover:text-secondary-600 transition active:scale-95" />
                    </Link>
                    <Link href="/" >
                        <FaInstagram className="text-secondary-500 inline text-xl hover:text-secondary-600 transition active:scale-95" />
                    </Link>
                </div>

            </div>



            <nav className="sticky top-0 z-50 h-[70px]  w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">

                {/* Logo */}
                <Link href="/" className="text-primary-600 flex items-center">
                    {/* <Image
                        src="/logo.png"
                        alt="Company Logo"
                        width={80}
                        height={32}
                        sizes="150px"
                        className="w-[80px] h-auto object-contain"
                    /> */}
                    <Image
                        src="/logo.png"
                        alt="Company Logo"
                        width={160}
                        height={64}
                        className="w-20 md:w-32 h-auto object-contain"
                    />


                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10">
                    <li>
                        <Link href="/" className="hover:text-secondary-500 transition">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href="/about" className="hover:text-secondary-500 transition">
                            About Us
                        </Link>
                    </li>

                    <li>
                        <Link href="/services" className="hover:text-secondary-500 transition">
                            Our Services
                        </Link>
                    </li>

                    <li>
                        <Link href="/team" className="hover:text-secondary-500 transition">
                            Team
                        </Link>
                    </li>

                    <li>
                        <Link href="/blogs" className="hover:text-secondary-500 transition">
                            Blogs
                        </Link>
                    </li>

                    <li>
                        <Link href="/faq" className="hover:text-secondary-500 transition">
                            FAQ's
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" className="hover:text-secondary-500 transition">
                            Contact Us
                        </Link>
                    </li>
                </ul>




                {/* Mobile Menu Button */}
                <button
                    aria-label="menu-btn"
                    type="button"
                    className="menu-btn inline-block md:hidden  transition"
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
                        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                    </svg>
                </button>



                {/* Mobile Menu */}
                <div className={`absolute top-[70px] left-0 w-full bg-white p-6 md:hidden transition-all ${isMobileMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col space-y-4 text-lg">

                        <Link href="/" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}> <li>Home</li></Link>


                        <Link href="/about" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}> <li>About us</li></Link>


                        <Link href="/services" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}> <li>Our Services</li></Link>


                        <Link href="/team" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}> <li>Team</li></Link>


                        <Link href="/blogs" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}> <li>Blogs</li></Link>


                        <Link href="/faq" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}> <li>FAQ's</li></Link>


                        <Link href="/contact" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}> <li>Contact Us</li></Link>

                    </ul>
                </div>

            </nav>
        </>
    );
}
