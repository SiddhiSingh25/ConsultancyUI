import Link from "next/link";
import { services } from "../data/services-data";

export default function Services() {
  return (
    <section className="py-8 px-4 md:px-16 lg:px-24 xl:px-24">
      <h1 className="text-3xl text-primary-800 font-semibold text-center">
        Our Services
      </h1>

      <p className="text-sm text-primary-600 text-center mt-2 max-w-md mx-auto">
        Providing expert accounting, taxation, and advisory services to help businesses grow with confidence.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-6 mt-12">
        {services.map(({ id, icon: Icon, title, description }) => (
          <Link key={id} href={`/services/${id}`} className="group">
            <article className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-primary-300 gap-6 max-w-sm transition hover:shadow-lg hover:scale-105">
              <div className="p-6 aspect-square bg-primary-100 rounded-full transition group-hover:bg-primary-200">
                <Icon className="text-primary-800 text-2xl" />
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">{title}</h3>
                <p className="text-sm text-slate-600 line-clamp-3">{description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>

    </section>
  );
}
