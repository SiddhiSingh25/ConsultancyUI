import React from 'react'

type HeadingProps = {
  title: string;
  description: string;
};

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="text-center px-4 md:px-16 lg:px-24 xl:px-24">
      <h1 className="relative inline-block text-3xl md:text-4xl font-semibold text-primary-900">
        {title}
        <span className="absolute left-1/2 -bottom-3 h-[3px] w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-300"></span>
      </h1>

      <p className="mt-6 text-sm md:text-sm text-primary-500 max-w-md mx-auto">
        {description}
      </p>
    </div>
  )
}

export default Heading