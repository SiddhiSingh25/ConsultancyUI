// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { IoChatbubbleEllipsesSharp, IoClose } from "react-icons/io5";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { toast } from "react-toastify";
// import AnimatedButton from "./common/AnimatedButton";

// /* ------------------ Validation Schema ------------------ */
// const schema = yup.object({
//   name: yup.string().required("Name is required"),
//   email: yup
//     .string()
//     .email("Enter a valid email")
//     .required("Email is required"),
//   phoneNo: yup
//     .string()
//     .required("Phone number is required")
//     .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number"),
//   message: yup
//     .string()
//     .min(5, "Message is too short")
//     .required("Message is required"),
// });

// const QuickMessage = () => {
//   const [open, setOpen] = useState(false);
//   const popupRef = useRef<HTMLDivElement | null>(null);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   /* ------------------ Click Outside to Close ------------------ */
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (
//         popupRef.current &&
//         !popupRef.current.contains(e.target as Node)
//       ) {
//         setOpen(false);
//       }
//     };

//     if (open) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [open]);

//   /* ------------------ Submit Handler ------------------ */
//   const handleQuickMessage = async (data: any) => {
//     try {
//       await axios.post("/api/contact", data);
//       toast.success("Message sent successfully 🎉");
//       reset();
//       setOpen(false);
//     } catch {
//       toast.error("Something went wrong. Try again!");
//     }
//   };

//   return (
//     <>
//       {/* Floating Chat Button */}
//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full 
//                    bg-secondary-500 flex items-center justify-center 
//                    shadow-xl hover:scale-110 transition-all duration-300"
//       >
//         <IoChatbubbleEllipsesSharp className="text-2xl text-white" />
//       </button>

//       {/* Chat Popup */}
//       {open && (
//         <div
//           ref={popupRef}
//           className="fixed bottom-24 right-3 md:right-6  z-50 w-[92vw] max-w-sm
//                      animate-chatOpen"
//         >
//           <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

//             {/* Header */}
//             <div className="bg-primary-700 text-white p-4 flex justify-between items-center">
//               <div>
//                 <h4 className="font-semibold">Hi there 👋</h4>
//                 <p className="text-xs opacity-90">
//                   Leave your details & we’ll contact you
//                 </p>
//               </div>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="hover:rotate-90 transition"
//               >
//                 <IoClose size={20} />
//               </button>
//             </div>

//             {/* Form */}
//             <form
//               onSubmit={handleSubmit(handleQuickMessage)}
//               className="p-4 space-y-3"
//             >
//               <div>
//                 <input
//                   {...register("name")}
//                   placeholder="Your Name"
//                   className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
//                 />
//                 {errors.name && (
//                   <p className="text-xs text-red-500 mt-1">
//                     {errors.name.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   {...register("email")}
//                   placeholder="Email Address"
//                   className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
//                 />
//                 {errors.email && (
//                   <p className="text-xs text-red-500 mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   {...register("phoneNo")}
//                   placeholder="Phone Number"
//                   className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
//                 />
//                 {errors.phoneNo && (
//                   <p className="text-xs text-red-500 mt-1">
//                     {errors.phoneNo.message}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <textarea
//                   {...register("message")}
//                   rows={3}
//                   placeholder="Your message..."
//                   className="w-full border rounded-lg px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-primary-500 outline-none"
//                 />
//                 {errors.message && (
//                   <p className="text-xs text-red-500 mt-1">
//                     {errors.message.message}
//                   </p>
//                 )}
//               </div>

//               {/* <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-primary-700 text-white py-2 rounded-lg
//                            hover:bg-primary-800 transition disabled:opacity-60"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button> */}

//                <AnimatedButton
//                 type="submit"
//                 disabled={isSubmitting}
//                 title={isSubmitting ? "Submitting..." : "Submit"}
//               />
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default QuickMessage;


"use client";

import React, { useState, useRef, useEffect } from "react";
import { IoChatbubbleEllipsesSharp, IoClose } from "react-icons/io5";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import AnimatedButton from "./common/AnimatedButton";

/* ---------------- Validation ---------------- */
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNo: yup
    .string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit number"),
  message: yup.string().min(5).required("Message is required"),
});

const QuickMessage = () => {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  /* -------- Close on outside click -------- */
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const handleQuickMessage = async (data: any) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Message sent successfully ✨");
      reset();
      setOpen(false);
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full 
        bg-gradient-to-tr from-primary-600 to-primary-800
        shadow-xl hover:scale-110 transition-all duration-300"
      >
        <IoChatbubbleEllipsesSharp className="text-2xl text-white mx-auto" />
      </button>

      {/* Chat Box */}
      {open && (
        <div
          ref={popupRef}
          className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm animate-chatOpen"
        >
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-5 py-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-base">Hi there 👋</h4>
                <p className="text-xs opacity-90">
                  We usually reply in a few minutes
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="hover:rotate-90 transition"
              >
                <IoClose size={20} />
              </button>
            </div>

            {/* Body */}
            <form
              onSubmit={handleSubmit(handleQuickMessage)}
              className="p-5 space-y-4"
            >
              {/* Input */}
              {[
                { name: "name" as const, placeholder: "Your Name" },
                { name: "email" as const, placeholder: "Email Address" },
                { name: "phoneNo" as const, placeholder: "Phone Number" },
              ].map((field) => (
                <div key={field.name}>
                  <input
                    {...register(field.name)}
                    placeholder={field.placeholder}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm
                    focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none
                    transition"
                  />
                  {errors[field.name] && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors[field.name]?.message as string}
                    </p>
                  )}
                </div>
              ))}

              {/* Message */}
              <div>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm resize-none
                  focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Button
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-primary-600 to-primary-800
                text-white py-2.5 text-sm font-medium hover:opacity-90 transition
                disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button> */}


              <AnimatedButton
                type="submit"
                disabled={isSubmitting}
                title={isSubmitting ? "Submitting..." : "Submit"}
              />

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickMessage;
