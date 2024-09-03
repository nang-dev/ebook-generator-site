'use client';

import Link from 'next/link'
import { fetchDataFromApi } from './script'

export default function Generate() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Success! The E-book will be sent to your email.</h1>
            <h3 className="h3">(Estimated time: less than 10 minutes)</h3>
            <p>In the rare case of a platform error, if you do not recieve your E-book in more than 1 day, please email nulllabsllc@gmail.com with the topic and target audience of the book. Please be sure to check your 'spam' folder.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
