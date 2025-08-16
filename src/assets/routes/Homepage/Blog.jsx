import React from "react";

const NFOPage = () => {
  const openFunds = [
    {
      name: "Groww BSE Power ETF FOF Direct-Growth",
      risk: "Very High Risk",
      type: "Equity",
      launchDate: "18 Jul ‘25",
      closeDate: "01 Aug ‘25",
      returns: "12.5%",
      minInvestment: "₹5,000"
    },
    {
      name: "Quant Equity Savings Fund Direct - Growth",
      risk: "Moderate Risk",
      type: "Hybrid",
      launchDate: "07 Jul ‘25",
      closeDate: "21 Jul ‘25",
      returns: "9.2%",
      minInvestment: "₹2,500"
    },
    {
      name: "ICICI Prudential Active Momentum Fund Direct-Growth",
      risk: "Very High Risk",
      type: "Equity",
      launchDate: "08 Jul ‘25",
      closeDate: "22 Jul ‘25",
      returns: "14.3%",
      minInvestment: "₹10,000"
    },
    {
      name: "SBI Nifty100 Low Volatility 30 Index Fund Direct - Growth",
      risk: "Very High Risk",
      type: "Equity",
      launchDate: "08 Jul ‘25",
      closeDate: "22 Jul ‘25",
      returns: "11.7%",
      minInvestment: "₹1,000"
    },
    {
      name: "Bandhan Multi-Factor Fund Direct - Growth",
      risk: "Very High Risk",
      type: "Equity",
      launchDate: "10 Jul ‘25",
      closeDate: "24 Jul ‘25",
      returns: "13.8%",
      minInvestment: "₹5,000"
    },
    {
      name: "Franklin India Multi Asset Allocation Fund Direct-Growth",
      risk: "Very High Risk",
      type: "Hybrid",
      launchDate: "11 Jul ‘25",
      closeDate: "25 Jul ‘25",
      returns: "10.5%",
      minInvestment: "₹3,000"
    },
    {
      name: "Capitalmind Flexi Cap Fund Direct - Growth",
      risk: "Very High Risk",
      type: "Equity",
      launchDate: "15 Jul ‘25",
      closeDate: "29 Jul ‘25",
      returns: "15.2%",
      minInvestment: "₹10,000"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-12 shadow-xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">New Fund Offerings</h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Invest in new opportunities with carefully curated funds designed for growth and diversification
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Explore Current NFOs
              </button>
              <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>

        {/* NFO Cards Grid */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Currently Open NFOs</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                Sort by Date
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openFunds.map((fund, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-2">
                        <div className={`w-3 h-3 rounded-full mr-2 ${fund.risk === "Very High Risk" ? "bg-red-500" : "bg-yellow-500"}`}></div>
                        <span className={`text-xs font-medium ${fund.risk === "Very High Risk" ? "text-red-600" : "text-yellow-600"}`}>
                          {fund.risk}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{fund.name}</h3>
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded mb-4">
                        {fund.type}
                      </span>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <div className="text-xl font-bold text-blue-600">{fund.returns}</div>
                      <div className="text-xs text-gray-500">Est. Returns</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Launch Date</span>
                      <span className="font-medium">{fund.launchDate}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>Closing Date</span>
                      <span className="font-medium">{fund.closeDate}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                      <span className="text-gray-600">Min. Investment</span>
                      <span className="font-medium text-gray-800">{fund.minInvestment}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-300">
                      Invest Now
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition duration-300">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NFO Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding New Fund Offerings</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is an NFO?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A New Fund Offering (NFO) is the first subscription offering for any new fund being launched by an investment company. 
                NFOs help raise money for new portfolios at a usually lower entry cost, providing a great chance to diversify and potentially 
                benefit from early NAV advantages.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="ml-3 text-blue-700">
                    <strong>Key Insight:</strong> As per SEBI regulations, a new fund offering can remain active for a maximum of 30 days. 
                    After a fund closes, its NAV will determine further trading.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Types of NFOs</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Close-ended Funds</h4>
                    <p className="text-gray-600">
                      Fixed corpus, limited trading period, no new investments allowed post subscription. 
                      These funds have a fixed maturity date.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Open-ended Funds</h4>
                    <p className="text-gray-600">
                      Continuous investments and redemptions allowed based on NAV. Investors can enter or exit 
                      the fund at any time after launch.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits of NFOs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Access to new investment strategies and portfolio diversification</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Smaller fund size allows for more nimble investment decisions</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Potential for early entry advantages and lower initial NAV</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Opportunity to invest with reputable fund managers at launch</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Invest in an NFO</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Through a Broker</h4>
                  <p className="text-gray-600 text-sm">
                    Consult with a licensed financial broker to invest in NFOs with professional guidance.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Online Trading</h4>
                  <p className="text-gray-600 text-sm">
                    Use online trading platforms to invest in NFOs directly from your computer or mobile device.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Mobile App</h4>
                  <p className="text-gray-600 text-sm">
                    Download our mobile app to explore and invest in NFOs anytime, anywhere with just a few taps.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Important Considerations</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Evaluate the reputation and track record of the Asset Management Company (AMC)</li>
                <li>Review the minimum subscription requirement for the fund</li>
                <li>Understand the type of securities and investment mandate</li>
                <li>Consider your risk tolerance and investment horizon</li>
                <li>Read the scheme information document carefully before investing</li>
              </ul>
            </div>
            
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
                Download Complete NFO Guide
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Invest in New Opportunities?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg opacity-90">
            Join thousands of investors who are diversifying their portfolios with carefully selected NFOs
          </p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Create Free Account
          </button>
          <div className="mt-4 text-sm opacity-80">No account fees • No minimum balance</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 w-8 h-8 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">NF</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white">FundInvest</span>
              </div>
              <p className="text-sm mb-4">
                Empowering investors with smart financial solutions since 2015.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">NFOs</a></li>
                <li><a href="#" className="hover:text-white transition">Mutual Funds</a></li>
                <li><a href="#" className="hover:text-white transition">Stocks</a></li>
                <li><a href="#" className="hover:text-white transition">Fixed Deposits</a></li>
                <li><a href="#" className="hover:text-white transition">Bonds</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Research Reports</a></li>
                <li><a href="#" className="hover:text-white transition">Market Insights</a></li>
                <li><a href="#" className="hover:text-white transition">Learning Center</a></li>
                <li><a href="#" className="hover:text-white transition">Calculators</a></li>
                <li><a href="#" className="hover:text-white transition">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Disclosures</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
                <li><a href="#" className="hover:text-white transition">Grievance Redressal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            <p>© 2025 FundInvest Financial Services. All rights reserved.</p>
            <p className="mt-2">Registered with SEBI as Investment Adviser. Registration No.: INA000012345</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NFOPage;