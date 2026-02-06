import React from 'react'
import Heading from './common/Heading'

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4">
  <div className="max-w-7xl mx-auto">


    <Heading title={"Why Choose Us"} description= {`At Unmatched Consultancy, we don’t just provide services — we become a part of your business journey.`} />

   

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

      {[
        {
          title: "Your Business, Our Responsibility",
          desc: "We think and act as stakeholders, ensuring complete ownership and accountability."
        },
        {
          title: "Expert Technical & Financial Knowledge",
          desc: "Strong expertise in business consulting, taxation, accounting, compliance, and payroll."
        },
        {
          title: "End-to-End Business Support",
          desc: "From company incorporation to ongoing compliance and financial management."
        },
        {
          title: "Customized Business Solutions",
          desc: "Tailor-made strategies aligned with your business goals and industry requirements."
        },
        {
          title: "Compliance-Driven Approach",
          desc: "Timely filings, accurate reporting, and adherence to statutory regulations."
        },
        {
          title: "Growth & Cost Optimization Focus",
          desc: "Helping businesses reduce costs, improve efficiency, and grow sustainably."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="border border-primary-800/10 rounded-xl p-6 hover:shadow-lg transition"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary-500/10 text-secondary-500 font-bold text-lg mb-4">
            {index + 1}
          </div>
          <h3 className="text-lg font-semibold text-primary-800 mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-primary-800/70">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
  )
}

export default WhyChooseUs