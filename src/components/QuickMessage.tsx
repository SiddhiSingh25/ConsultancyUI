"use client";

import React, { useState } from "react";
import { IoChatbubbleEllipsesSharp, IoClose } from "react-icons/io5";

const QuickMessage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Icon */}
      <div
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 md:w-14 md:h-14 h-10 w-10 rounded-full bg-primary-700 flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer z-50"
      >
        <IoChatbubbleEllipsesSharp className="text-xl text-white" />
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 relative animate-scaleIn">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <IoClose size={22} />
            </button>

            {/* Modal Content */}
            <h3 className="text-lg font-semibold text-gray-900">
              Quick Message
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              Send us a message and we’ll get back to you soon.
            </p>

            <textarea
              placeholder="Type your message..."
              className="w-full mt-4 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows={4}
            />

            <button className="mt-4 w-full bg-primary-700 text-white py-2 rounded-lg hover:bg-primary-800 transition">
              Send Message
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickMessage;
