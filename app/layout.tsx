"use client";

import "./css/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";

import Header from "@/components/ui/header";
import { Banner } from "@/components/banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AnimatePresence>
        <motion.body
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className={`${inter.variable} font-inter antialiased bg-stone-200 text-gray-900 tracking-tight`}
        >
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {/* <Header /> */}
            {children}
          </div>
        </motion.body>
      </AnimatePresence>
    </html>
  );
}