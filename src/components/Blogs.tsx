"use client";
import Link from 'next/link';
import { blogData } from '../data/blogs-data';
import Heading from './common/Heading';

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
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover rounded-t-2xl"
                  src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-secondary-600 hover:underline transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary-500 font-medium mt-2">{item.date}</p>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{'Read more'}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
