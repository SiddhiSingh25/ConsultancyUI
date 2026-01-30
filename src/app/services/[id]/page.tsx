// import { notFound } from "next/navigation";
// import { detailedServices } from "../../../data/detailedServices-data";
// import { FaCheck } from "react-icons/fa";


// type PageProps = {
//   params: Promise<{ id: string }>;
// };

// const Page = async ({ params }: PageProps) => {
//   const { id } = await params;

//   const service = detailedServices[id as keyof typeof detailedServices];

//   if (!service) {
//     notFound();
//   }

//   return (
//     <>
//       {/* Header */}
//       <section className="text-center mt-8 px-4">
//         <h1 className="text-3xl font-semibold">{service.title}</h1>

//         <p className="text-sm text-slate-500 mt-3 max-w-2xl mx-auto">
//           {service.shortContent}
//         </p>
//       </section>

//       {/* Main Content */}
//       <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 py-12">
//         {/* Image */}
//         <img
//           className="max-w-sm w-full rounded-xl h-auto shadow-md"
//           src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
//           alt={service.title}
//         />

//         {/* Details */}
//         <div className="flex-1 max-w-lg">
//           <h2 className="text-2xl font-semibold mb-3">
//             About {service.title}
//           </h2>

//           <p className="text-sm text-slate-500 mb-6">
//             {service.content}
//           </p>

//           {/* Highlights */}
//           <div className="flex flex-col gap-6">
//             {service.highlights.map((item, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="size-9 flex items-center justify-center bg-indigo-50 border border-indigo-200 rounded text-indigo-600">
//                   <FaCheck className="text-primary-900"/>
//                 </div>

//                 <div>
//                   <h3 className="text-base font-medium text-slate-700">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-slate-500">
//                     {item.shortDesc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Page;
import Image from "next/image";
import { notFound } from "next/navigation";
import { detailedServices } from "../../../data/detailedServices-data";
import { FaCheck } from "react-icons/fa";

type PageProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const service = detailedServices[id as keyof typeof detailedServices];

  if (!service) {
    notFound();
  }

  return (
    <div className="py-8">
      {/* Header */}
      <h1 className="text-3xl text-primary-900 font-semibold text-center">
        {service.title}
      </h1>

      <p className="text-sm text-primary-600 text-center mt-2 max-w-md mx-auto">
        {service.shortContent}
      </p>

      {/* Main Section */}
      <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-24 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Image Card */}
        <div className="relative shadow-2xl shadow-primary-300 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/images/about/about.jpeg"
            alt={service.title}
            width={451}
            height={451}
            className="max-w-md w-full object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="text-base text-primary-600 max-w-lvh">
              <h2 className="text-2xl font-semibold mb-3">
            About {service.title}
          </h2>

          <p className="text-sm text-slate-500 mb-6">
            {service.content}
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-col gap-6">
            {service.highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="size-9 flex items-center justify-center bg-primary-100 border border-primary-200 rounded">
                  <FaCheck className="text-primary-900" />
                </div>

                <div>
                  <h3 className="text-base font-medium text-primary-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-600">
                    {item.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </section>
    </div>
  );
};

export default Page;
