"use client";

// export const metadata = {
//   title: "Home - Simple",
//   description: "Page description",
// };

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';


import { Banner } from "@/components/banner";

const images = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
].map((image) => ({
  id: crypto.randomUUID(),
  image,
}));


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Function to update the state based on the window width
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile devices
      };

      // Set the initial value
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <>
      <div className="main-container flex w-screen lg:h-screen items-center justify-center">
        <section className="p-8 h-full lg:justify-end items-center w-full">
          <div className="max-w-[500px]">
            {/* Hero content */}
            <div className="py-12">
              {/* Section header */}

              <div className="flex flex-col gap-5">
                {/* text */}

                {/* <img
                  className="w-14 h-14 p-2 rounded-md bg-orange-500/10 shadow-sm border border-tertiary-white"
                  src={"logo.svg"}
                  alt="logo"
                /> */}
                <motion.div
                  initial={{ rotate: 270 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                  className="w-10 h-10 bg-[#FF2E00] logo"
                ></motion.div>
                <div className="flex gap-2 flex-col">
                  <h1 className="ttext-xl text-black font-medium">
                    Examples
                  </h1>
                  <p className="text-base text-black/60">
                    This page is still under construction but view examples below!
                  </p>
                  <a href="https://ai-ebook.s3.us-east-1.amazonaws.com/32124815001702929867.2846346.pdf" target="_blank" rel="noopener noreferrer"  className="text-blue-600 hover:text-blue-800">
                    Exploring the Universe: A Journey Through Space and Time
                  </a>
                  <a href="https://ai-ebook.s3.us-east-1.amazonaws.com/29996226551702961856.6946757.pdf" target="_blank" rel="noopener noreferrer"  className="text-blue-600 hover:text-blue-800">
                    Master Your Money: Student's Guide to Financial Freedom
                  </a>
                  <a href="https://ai-ebook.s3.us-east-1.amazonaws.com/42557826781703778156.6993895.pdf" target="_blank" rel="noopener noreferrer"  className="text-blue-600 hover:text-blue-800">
                    Exploring the World of Fine Wines
                  </a>
                  <a href="https://ai-ebook.s3.us-east-1.amazonaws.com/42557826781703778156.6993895.pdf" target="_blank" rel="noopener noreferrer"  className="text-blue-600 hover:text-blue-800">
                    Exploring the World of Fine Wines
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
