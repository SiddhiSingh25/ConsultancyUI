"use client";

import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { teamData } from "../data/teams-data.js";
import Heading from "./common/Heading";
import Link from "next/link.js";
import { LiaLinkedinIn } from "react-icons/lia";

type TeamProps = {
  limit?: number;
};


export default function Team({ limit }: TeamProps) {
  const visibleTeam = limit
    ? teamData.slice(0, limit)
    : teamData;

  return (
    <section className="py-16 px-4 md:px-16 lg:px-24 xl:px-32">

      <Heading title={"Meet Our Team"} description={`A dynamic team delivering unmatched business solutions.`} />


      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {visibleTeam.map((team, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
          >
            {/* Avatar */}
            <div className="relative w-24 h-24 mx-auto">
              <Image
                src={team.image}
                alt={team.name}
                fill
                sizes="96px"
                className="rounded-full object-cover shadow-md"
              />
            </div>

            {/* Content */}
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
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
              <Link href="/" className="bg-secondary-50 p-2 rounded-full hover:bg-secondary-200 transition cursor-pointer">
                <LiaLinkedinIn />
              </Link>
              <Link href="/" className="bg-secondary-50 p-2 rounded-full hover:bg-secondary-200 transition cursor-pointer">
                <MdEmail />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
