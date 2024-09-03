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
            <h1 className="h1">Check health in console</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={fetchDataFromApi}>Access Health</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
