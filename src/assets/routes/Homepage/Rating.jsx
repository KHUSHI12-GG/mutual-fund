import React from 'react'

const Rating = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Invest in Mutual Funds with Confidence
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Trusted solutions to help grow your wealth. No confusing jargon, just simple and smart investments.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-indigo-600">15K+</div>
            <p className="mt-2 text-sm text-gray-700">Investors Onboarded</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-yellow-500">4.9★</div>
            <p className="mt-2 text-sm text-gray-700">Client Rating</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-green-600">3 Days</div>
            <p className="mt-2 text-sm text-gray-700">Portfolio Activation</p>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#quote"
            className="inline-block rounded-md bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Get Free Investment Plan
          </a>
          <a
            href="#portfolio"
            className="inline-block rounded-md border border-indigo-600 px-6 py-3 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
          >
            See Sample Portfolios
          </a>
        </div>
      </div>
    </div>
  );
}
 

export default Rating