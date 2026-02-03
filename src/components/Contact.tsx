"use client";

export default function Contact() {
  return (
    <>
   

      <section className="relative bg-white flex flex-col md:flex-row justify-center px-0 md:px-16 lg:px-24 xl:px-24 py-20 gap-20">

        {/* Background Blur Circle */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 w-[140px] h-[140px] bg-primary-900 rounded-full blur-[200px]"></div>

        {/* Left Text Content */}
        <div className="text-center md:text-left mt-12">
          {/* Community Avatars */}
          <div className="flex items-center p-1.5 rounded-full border border-primary-900 text-xs w-fit mx-auto md:mx-0">
            <div className="flex items-center">
              <img className="w-7 h-7 rounded-full border border-primary-900" src="/images/about/user-1.jpeg" alt="userImage1" />
              <img className="w-7 h-7 rounded-full border border-primary-900 -translate-x-2" src="/images/about/user-2.jpeg" alt="userImage2" />
              <img className="w-7 h-7 rounded-full border border-primary-900 -translate-x-4" src="/images/about/user-3.jpeg" alt="userImage3" />
            </div>
            <p className="-translate-x-2 text-xs text-primary-900">Trusted by 20+ businesses</p>
          </div>

          {/* Heading */}
          <h1 className="font-medium text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-900 to-primary-300 max-w-[470px] mt-4 mx-auto md:mx-0">
            Get Expert Business Advice Today
          </h1>

          {/* Subtext */}
          <p className="text-sm text-primary-900 max-w-[345px] mt-4 mx-auto md:mx-0">
            Reach out to Unmatched Consultancy for guidance on accounting, taxation, compliance, and business strategy. Our experts are ready to help your business grow.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-lg max-md:mx-auto bg-primary-100/0 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <form className="space-y-6" suppressHydrationWarning>
            {/* Name */}
            <div>
              <label className="block text-slate-900 text-sm mb-2">Name</label>
              <input 
                type="text" 
                required
                placeholder="Eden Johnson" 
                className="w-full bg-primary-100/5 border border-primary-900 rounded-lg px-4 py-3 text-slate-900/40 placeholder:text-slate-900/40 placeholder:text-sm focus:outline-none focus:border-primary-600 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-900 text-sm mb-2">Email</label>
              <input 
                type="email" 
                required
                placeholder="Eden@example.com" 
                className="w-full bg-primary-100/5 border border-primary-900 rounded-lg px-4 py-3 text-slate-900/40 placeholder:text-slate-900/40 placeholder:text-sm focus:outline-none focus:border-primary-600 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-slate-900 text-sm mb-2">Message</label>
              <textarea 
                placeholder="Write your message here..." 
                rows={4}
                required
                className="w-full bg-primary-100/5 border border-primary-900 rounded-lg px-4 py-3 text-slate-900/40 placeholder:text-slate-900/40 placeholder:text-sm focus:outline-none focus:border-primary-600 transition resize-none"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-slate-900/90 max-w-xs">
                By submitting, you agree to our <span className="text-slate-900">Terms</span> and <span className="text-slate-900">Privacy Policy</span>.
              </p>
              <button 
                type="submit" 
                className="bg-gradient-to-r from-primary-900 to-primary-600 hover:from-primary-600 hover:to-primary-900 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
