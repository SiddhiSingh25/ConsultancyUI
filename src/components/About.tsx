import Image from 'next/image'

const About = () => {
    return (
        <div className='py-8'>

            <h1 className="text-3xl text-primary-900 font-semibold text-center">
                About us
            </h1>

            <p className="text-sm text-primary-600 text-center mt-2 max-w-md mx-auto">
                Providing expert accounting, taxation, and advisory services.
            </p>
            <section className="py-12 px-4 md:px-16 lg:px-24 xl:px-24 flex flex-col md:flex-row items-center justify-center gap-10">



                {/* Left Image Card */}
                <div className="relative shadow-2xl shadow-primary-300 rounded-2xl overflow-hidden shrink-0">
                    <Image
                        src="/images/about/about.jpeg"
                        alt="Unlimited Consultancy Team"
                        width={451}
                        height={451}
                        className="max-w-md w-full object-cover rounded-2xl"
                        priority
                    />

                    {/* Floating Community Card */}
                    <div className="hidden absolute bottom-8 left-8 bg-white p-4 rounded-xl md:flex  items-center gap-3 max-w-lg">
                        <div className="flex -space-x-4">
                            {[
                                "/images/about/user-1.jpeg",
                                "/images/about/user-2.jpeg",
                                "/images/about/user-3.jpeg",
                            ].map((src, i) => (
                                <Image
                                    key={i}
                                    src={src}
                                    alt="Team member"
                                    width={36}
                                    height={36}
                                    className="rounded-full border-[3px] border-white hover:-translate-y-1 transition"
                                />
                            ))}
                            <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-primary-800 hover:-translate-y-1 transition">
                                50+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-primary-800">
                            Trusted by growing businesses
                        </p>
                    </div>
                </div>

                {/* Right Content */}
                <div className="text-base text-primary-600 max-w-lvh">
                    <h1 className="text-xl uppercase font-semibold text-primary-700">
                        What we do?
                    </h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-primary-800 to-primary-300"></div>

                    <p className="mt-8">
                        Unmatched Consultancy is a trusted advisory and financial services firm helping entrepreneurs, startups, and established businesses build, manage, and grow with confidence.
                    </p>

                    <p className="mt-4">
                        We simplify complex business processes, ensure statutory compliance, and deliver practical, growth-focused solutions tailored to each client’s needs.
                    </p>

                    <p className="mt-4">
                        Backed by 20+ experienced professionals, we operate from Delhi with offices in Gurugram and Noida, delivering reliable and timely support across the business lifecycle.
                    </p>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-primary-900 to-primary-300 py-3 px-8 rounded-full text-white hover:-translate-y-0.5 transition"
                    >
                        <span>Know more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff"
                            />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default About
