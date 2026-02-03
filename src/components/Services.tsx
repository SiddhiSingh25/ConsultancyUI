import Link from "next/link";
import { servicesData } from "../data/services-data";
import Heading from "./common/Heading";

type ServiceProp = {
  limit?: number
}

export default function Services({limit} : ServiceProp) {

  let VisibleServices = limit ? servicesData.slice(0,limit) : servicesData
  return (

    <section className="py-16 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Heading */}

       <Heading title={" Our Services"} description= {`Expert accounting, taxation, and advisory services designed to help
          businesses grow with clarity and confidence.`} />
     

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {VisibleServices.map(({ id, icon: Icon, title, description }) => (
          <Link key={id} href={`/services/${id}`} className="group">
            <article
              className="
                relative h-full rounded-2xl border border-slate-200 bg-white p-8
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-50 transition group-hover:bg-secondary-100">
                <Icon className="text-secondary-500 text-2xl" />
              </div>

              {/* Content */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold md:font-semibold text-slate-800">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
