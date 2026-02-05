"use client";
import Link from 'next/link';
import { blogData } from '../data/blogs-data';
import Heading from './common/Heading';
import Image from 'next/image';

export default function Blogs() {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
      <Heading
        title={"Latest Blog"}
        description={`Stay ahead of the curve with fresh content on code, design, startups, and everything in between.`}
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer">

              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>


              {/* Content */}
              <div className="p-5 space-y-3">

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-secondary-500">
                  <span>{item.date}</span>
                  <span className="font-medium">By {item.publishedBy}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900  leading-snug line-clamp-2">
                  {item.title}
                </h3>


                {/* CTA */}
                <div className="flex items-center gap-2 pt-2 text-secondary-600 font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
