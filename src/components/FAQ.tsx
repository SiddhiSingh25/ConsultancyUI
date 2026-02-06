"use client";
import React, { useState } from "react";
import Heading from "./common/Heading";
import Image from "next/image";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Unlimited Consultancy provide?",
      answer:
        "We offer expert services in Taxation, Accounting & Bookkeeping, Audit & Assurance, Business Advisory, and Regulatory Compliance tailored for businesses and individuals.",
    },
    {
      question: "How can I get started with your consultancy?",
      answer:
        "Simply contact us via our website or call our office. We provide personalized consultations to understand your needs and suggest the best financial solutions.",
    },
    {
      question: "Are your services suitable for small businesses?",
      answer:
        "Absolutely! We specialize in helping startups, SMEs, and growing enterprises optimize their financial processes and ensure compliance.",
    },
    {
      question: "Do you offer remote or online consultations?",
      answer:
        "Yes, we provide both in-person and remote consultations to accommodate clients locally and globally, ensuring flexibility and convenience.",
    },
    {
      question: "Can I customize your services for my business?",
      answer:
        "Definitely! We tailor our services to your business requirements, ensuring that taxation, accounting, and advisory solutions match your specific goals.",
    },
  ];

  return (

    <>
<div className="py-6">
      <Heading title={"Frequently Asked Questions"} description="Everything you need to know about our services."
      />

      <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-center gap-10">

        {/* Left Image */}
        <div className=" hidden md:flex relative shadow-2xl shadow-primary-300 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/images/faq/faq.png"
            alt="Unlimited Consultancy Team"
            width={451}
            height={451}
            className="max-w-md w-full object-cover rounded-2xl"
            priority
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Right Content */}
        <div className="text-base text-slate-800 max-w-lvh space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`rounded-xl px-5 py-4 cursor-pointer bg-white transition-all duration-300
                border ${isOpen
                    ? "border-primary-400 shadow-md"
                    : "border-primary-200 hover:border-primary-300 hover:shadow-sm"
                  }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`text-base font-medium transition-colors ${isOpen ? "text-primary-700" : "text-gray-900"
                      }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all
                    ${isOpen ? "bg-primary-100" : "bg-gray-100"}`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      <path
                        d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                        stroke="#1D293D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="text-sm text-primary-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      </div>
    </>
  );
};

export default FaqSection;
