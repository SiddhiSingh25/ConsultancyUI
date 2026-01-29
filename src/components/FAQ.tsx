"use client";
import React, { useState } from "react";

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
    {
      question: "How do you ensure confidentiality and data security?",
      answer:
        "We strictly adhere to professional ethics, using secure communication channels and maintaining complete confidentiality of all client information.",
    },
  ];

  return (
    <section className="max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0 py-16">
      <p className="text-primary-900 text-sm font-medium">FAQ's</p>
      <h1 className="text-3xl font-semibold text-center mt-2">Frequently Asked Questions</h1>
      <p className="text-sm text-primary-500 mt-2 pb-8 text-center">
        Get clear guidance on our accounting & consultancy services — simple, reliable, and designed to support your business growth.
      </p>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-primary-200 py-4 w-full cursor-pointer"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">{faq.question}</h3>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-500 ease-in-out ${openIndex === index ? "rotate-180" : ""}`}
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

          <p
            className={`text-sm text-primary-600 transition-all duration-500 ease-in-out max-w-md ${
              openIndex === index
                ? "opacity-100 max-h-75 translate-y-0 pt-4"
                : "opacity-0 max-h-0 -translate-y-2"
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </section>
  );
};

export default FaqSection;
