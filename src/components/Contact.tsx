"use client";

import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import Heading from './common/Heading';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNo: yup.number().required(),
    message: yup.string().required(),
  })
  .required();

export default function Contact() {


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });



  const handleContact = async (data: any) => {
    try {
      const res = await axios.post("/api/contact", data);
      console.log(res.data);

      reset();
      toast("Data is sent successfully")
    } catch (error) {
      console.error(error);
      toast("Got an error")
    }
  };


  return (
    <>

<Heading
  title="Contact Us"
  description="Get in touch with our experts for accounting, taxation, compliance, and business advisory support."
/>

      <section className="relative bg-white flex flex-col md:flex-row justify-center px-0 md:px-16 lg:px-24 xl:px-24 py-12 gap-20">




        {/* Background Blur Circle */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 w-[140px] h-[140px] bg-primary-900 rounded-full blur-[200px]"></div>

        {/* Left Text Content */}
        <div className="text-center md:text-left mt-12">
          {/* Community Avatars */}
          <div className="flex items-center p-1.5 rounded-full border border-primary-900 text-xs w-fit mx-auto md:mx-0">
            <div className="flex items-center">
              <img className="w-7 h-7 rounded-full border border-primary-900" src="/images/about/user-1.png" alt="userImage1" />
              <img className="w-7 h-7 rounded-full border border-primary-900 -translate-x-2" src="/images/about/user-2.png" alt="userImage2" />
              <img className="w-7 h-7 rounded-full border border-primary-900 -translate-x-4" src="/images/about/user-3.png" alt="userImage3" />
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
          <form onSubmit={handleSubmit((data) => handleContact(data))} className="space-y-6" suppressHydrationWarning>
            {/* Name */}
            <div>
              <label className="block text-slate-900 text-sm mb-2">Name</label>
              <input
                type="text"
                {...register('name')}
                placeholder="Eden Johnson"
                className="w-full bg-primary-100/5 border border-primary-900 rounded-lg px-4 py-3 text-slate-900/40 placeholder:text-slate-900/40 placeholder:text-sm focus:outline-none focus:border-primary-600 transition"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-900 text-sm mb-2">Email</label>
              <input
                type="email"
                {...register('email')}
                placeholder="Eden@example.com"
                className="w-full bg-primary-100/5 border border-primary-900 rounded-lg px-4 py-3 text-slate-900/40 placeholder:text-slate-900/40 placeholder:text-sm focus:outline-none focus:border-primary-600 transition"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone No */}
            <div>
              <label className="block text-slate-900 text-sm mb-2">Phone</label>
              <input
                type="number"
                {...register('phoneNo')}
                placeholder="Eden@example.com"
                className="w-full bg-primary-100/5 border border-primary-900 rounded-lg px-4 py-3 text-slate-900/40 placeholder:text-slate-900/40 placeholder:text-sm focus:outline-none focus:border-primary-600 transition"
              />
              {errors.phoneNo && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNo.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-slate-900 text-sm mb-2">Message</label>
              <textarea
                {...register('message')}
                placeholder="Write your message here..."
                rows={4}
                className="w-full bg-primary-100/5 border border-primary-900 rounded-lg px-4 py-3 text-slate-900/40 placeholder:text-slate-900/40 placeholder:text-sm focus:outline-none focus:border-primary-600 transition resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs md:text-sm text-slate-900/90 max-w-xs">
                By submitting, you agree to our <span className="text-slate-900">Terms</span> and <span className="text-slate-900">Privacy Policy</span>.
              </p>
              {/* <button 
                type="submit" 
                className="bg-gradient-to-r from-primary-900 to-primary-600 hover:from-primary-600 hover:to-primary-900 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer"
              >
                Submit
              </button> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary-900 to-primary-600 hover:from-primary-600 hover:to-primary-900 text-white text-sm px-8 md:px-16 py-3 rounded-full transition duration-300 cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

            </div>
          </form>
          <ToastContainer/>

        </div>
      </section>
    </>
  );
}
