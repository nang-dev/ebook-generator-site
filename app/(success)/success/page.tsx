'use client';

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Success() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
        }
        return Math.min(newProgress, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="w-full max-w-3xl mx-auto">

          {/* Success Animation */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-green-100 p-4 animate-[bounce_1s_ease-in-out]">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                  className="animate-[dash_1.5s_ease-in-out]"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Success! Your E-book is Being Generated
            </h1>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                      style={{ width: `${progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                    />
                  </div>
                </div>
                <p className="text-gray-600">
                  Estimated time: less than 10 minutes
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
              <p>
                In the rare case of a platform error, if you do not receive your E-book within 24 hours,
                please email <span className="font-medium">nulllabsllc@gmail.com</span> with the topic
                and target audience of the book. Please be sure to check your spam folder.
              </p>
            </div>

            {/* Return Home Button */}
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
