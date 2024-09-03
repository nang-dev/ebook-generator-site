"use client";

// export const metadata = {
//   title: "Home - Simple",
//   description: "Page description",
// };

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

import { Banner } from "@/components/banner";
import { FacebookPixel } from "@/components/facebook/pixel";
import Footer from "@/components/ui/footer";


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
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <FacebookPixel />
      <noscript>
        <img height="1" width="1" style={{display: 'none'}}
        src="https://www.facebook.com/tr?id=1429806270964834&ev=PageView&noscript=1" />
      </noscript>
      <div className="main-container flex w-screen lg:h-screen items-center justify-center">
        <section className="p-8 h-full flex lg:justify-end items-center w-full">
          <div className="max-w-[500px]">
            {/* Hero content */}
            <div className="py-12">
              {/* Section header */}

              <div className="flex flex-col gap-5">
                {/* text */}

                <motion.div
                  initial={{ rotate: 270 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                  className="w-10 h-10 bg-[#FF3D00] logo"
                ></motion.div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-xl text-black font-medium">
                    Make money selling e-books with AI.
                  </h1>
                  <div className="flex flex-col">
                    <h2 className="font-medium text-black/80 text-base">
                      01 - Understand The Potential
                    </h2>
                    <p className="text-base text-black/60 mb-2">
  AI allows for an unique opportunity in generated content that can make money. <a href="https://www.youtube.com/shorts/P8_VlkBjWK4" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Watch video here</a>.
</p>
                    </div>

                  <div className="flex flex-col">
                    <h2 className="font-medium text-black/80 text-base">
                      02 - Generate E-Book
                    </h2>
                    <p className="text-base text-black/60">
                      Use our tool to generate a high-quality E-Book. Just enter
                      a topic and a target audience, and get an E-Book that's
                      ready to sell!
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <h2 className="font-medium text-black/80 text-base">
                      03 – Sell E-Book and Earn Profit!
                    </h2>
                    <p className="text-base text-black/60">
                      Use Facebook and Pinterest as platforms to sell the E-Book
                      and make money! View the list of trending topics in 2024.
                    </p>
                  </div>
                </div>
                {/* buttons */}
                <div className="flex gap-2">
                  <a
                    className="btn btn-orange mb-4 sm:w-auto sm:mb-0"
                    href="generate-sell"
                  >
                    Generate E-Book
                  </a>
                  {/* <div>
                    <a
                      className="btn btn-black text-white w-full sm:w-auto"
                      href="examples"
                    >
                      See Examples
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative w-full overflow-hidden h-auto border md:border-transparent border-solid border-secondary-black">
          <Banner />
        </div>
      </div>
      <Footer />
    </>
  );
}
