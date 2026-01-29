import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-primary-800 text-gray-50">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500 pb-6">

        {/* Logo + About */}
        <div className="md:max-w-sm flex-shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </Link>

          <p className="mt-6 text-sm text-gray-100">
            Unmatched Consultancy is your trusted partner for accounting, taxation, audit, and financial advisory services. We help businesses navigate complex regulations and make informed decisions for sustainable growth.
          </p>
        </div>

        {/* Links + Contact Info */}
        <div className="flex flex-col md:flex-row flex-1 gap-10 md:gap-20">
          
          {/* Company Links */}
          <div className="flex-1">
            <h2 className="font-semibold mb-5 text-gray-50">Company</h2>
            <ul className="text-sm space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/teams">Teams</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/faq">FAQ's</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h2 className="font-semibold mb-5 text-gray-50">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p><FaPhoneAlt className="inline-block"/> +91 9650773891</p>
              <p><MdEmail className="inline-block"/> unmatchedconsultancy@gmail.com</p>
              <p><FaBuilding className="inline-block"/> Delhi: 144 St.no 05 Johripur, Delhi - 110094</p>
              <p><FaBuilding className="inline-block"/> Noida: B2-403, Ivy County, Sector 75, Noida - 201301</p>
              <p><FaBuilding className="inline-block"/> Gurugram: B-45, Sector 56, Gurugram, Haryana - 122011</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-300">
        Copyright 2026 © <Link href="#">Unmatched Consultancy</Link>. All Rights Reserved.
      </p>
    </footer>
  );
}
