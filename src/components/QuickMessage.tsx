"use client";

import  { useState } from "react";
import { IoChatbubbleEllipsesSharp, IoClose } from "react-icons/io5";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Validation Schema */
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNo: yup
  .string()
  .required("Phone number is required")
  .matches(
    /^[6-9]\d{9}$/,
    "Enter a valid 10-digit mobile number"
  ),
  message: yup.string().required("Message is required"),
});

const QuickMessage = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleQuickMessage = async (data:any) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Message sent successfully ");
      reset();
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 h-12 w-12 md:h-14 md:w-14 rounded-full bg-secondary-500 flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer z-50"
      >
        <IoChatbubbleEllipsesSharp className="text-xl md:text-2xl text-white" />
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative animate-scaleIn">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <IoClose size={22} />
            </button>

            {/* Header */}
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Message
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Leave your details and we’ll contact you shortly.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit(handleQuickMessage)}
              className="space-y-4 mt-4"
            >
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("email")}
                  placeholder="Email Address"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register("phoneNo")}
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                />
                {errors.phoneNo && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.phoneNo.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder="Your message..."
                  rows={3}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-700 text-white py-2 rounded-lg hover:bg-primary-800 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      )}

    </>
  );
};

export default QuickMessage;
