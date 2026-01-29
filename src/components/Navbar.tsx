"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>

            {/* Top Banner */}
            <div className="w-full bg-primary-800 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-3 gap-3 md:gap-0">
                {/* Contact Info */}
                <p className="text-center md:text-left text-sm md:text-base">
                    <span className="font-semibold">Email:</span> unmatchedconsultancy@gmail.com <br className="md:hidden" />
                    <span className="font-semibold">Phone:</span> 9650773891, 9910678889
                </p>

                <Link href="/contact" className="flex items-center gap-1 px-3 py-1 rounded-lg text-primary-800 bg-violet-50 hover:bg-slate-100 transition active:scale-95 ml-3">
                    Reach us
                    <IoIosArrowRoundForward className="text-2xl" />
                </Link>
            </div>



            <nav className="sticky top-0 z-50 h-[70px]  w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">

                {/* Logo */}
                <Link href="/" className="text-primary-600 flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Company Logo"
                        width={80}
                        height={32}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="md:flex hidden items-center gap-10">
                    <li><Link href="/" className="hover:text-gray-500/80 transition">Home</Link></li>
                    <li><Link href="/about" className="hover:text-gray-500/80 transition">About us</Link></li>
                    <li><Link href="/services" className="hover:text-gray-500/80 transition">Our Services</Link></li>
                    <li><Link href="/teams" className="hover:text-gray-500/80 transition">Teams</Link></li>
                    <li><Link href="/faq" className="hover:text-gray-500/80 transition">FAQ's</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-500/80 transition">Contact Us</Link></li>
                </ul>



                {/* Mobile Menu Button */}
                <button
                    aria-label="menu-btn"
                    type="button"
                    className="menu-btn inline-block md:hidden active:scale-90 transition"
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
                        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                    </svg>
                </button>

                {/* Mobile Menu
                <div className={`absolute top-[70px] left-0 w-full bg-white p-6 md:hidden transition-all ${isMobileMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col space-y-4 text-lg">
                        <li><Link href="/" className="text-sm">Home</Link></li>
                        <li><Link href="/about" className="text-sm">About us</Link></li>
                        <li><Link href="/services" className="text-sm">Our Services</Link></li>
                        <li><Link href="/faq" className="text-sm">FAQ's</Link></li>
                        <li><Link href="/teams" className="text-sm">Teams</Link></li>
                        <li><Link href="/contact" className="text-sm">Contact Us</Link></li>

                    </ul>

                </div> */}


                {/* Mobile Menu */}
                <div className={`absolute top-[70px] left-0 w-full bg-white p-6 md:hidden transition-all ${isMobileMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex flex-col space-y-4 text-lg">
                        <li>
                            <Link href="/" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>About us</Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
                        </li>
                        <li>
                            <Link href="/faq" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>FAQ's</Link>
                        </li>
                        <li>
                            <Link href="/teams" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>Teams</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-sm" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    );
}
