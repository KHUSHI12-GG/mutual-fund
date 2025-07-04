import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

const MutualFundDashboard = () => {
  // Initial fund data
  const initialFunds = [
    {
      id: 1,
      name: "HDFC Mutual Fund",
      category: "Large Cap",
      cagr: 18.2,
      size: 42568,
      risk: "Moderate",
      minInvestment: 5000,
      rating: 4.5,
      performance: { oneYear: 18.2, threeYear: 14.5, fiveYear: 16.8 },
      lastUpdated: Date.now(),
      detailsUrl: "https://www.hdfcfund.com/explore/mutual-funds"
    },
    {
      id: 2,
      name: "ICICI Mutual Fund",
      category: "Large Cap",
      cagr: 16.8,
      size: 38742,
      risk: "Moderate",
      minInvestment: 5000,
      rating: 4.4,
      performance: { oneYear: 16.8, threeYear: 15.2, fiveYear: 15.9 },
      lastUpdated: Date.now(),
      detailsUrl: "https://www.icicipruamc.com/"
    },
    {
      id: 3,
      name: "SBI Mutual Fund",
      category: "Small Cap",
      cagr: 24.6,
      size: 28563,
      risk: "High",
      minInvestment: 5000,
      rating: 4.7,
      performance: { oneYear: 24.6, threeYear: 26.3, fiveYear: 22.8 },
      lastUpdated: Date.now(),
      detailsUrl: "https://www.sbimf.com/en-us"
    },
    {
      id: 4,
      name: "Axis Mutual Fund",
      category: "Mid Cap",
      cagr: 20.4,
      size: 19785,
      risk: "Moderately High",
      minInvestment: 5000,
      rating: 4.6,
      performance: { oneYear: 20.4, threeYear: 19.8, fiveYear: 18.7 },
      lastUpdated: Date.now(),
      detailsUrl: "https://www.axismf.com/"
    },
    {
      id: 5,
      name: "Kotak Mutual Fund",
      category: "Flexi Cap",
      cagr: 17.9,
      size: 31547,
      risk: "Moderate",
      minInvestment: 5000,
      rating: 4.3,
      performance: { oneYear: 17.9, threeYear: 16.5, fiveYear: 15.8 },
      lastUpdated: Date.now(),
      detailsUrl: "https://www.kotakmutual.com/"
    },
    {
      id: 6,
      name: "Nippon Mutual Fund",
      category: "Value Fund",
      cagr: 19.7,
      size: 18742,
      risk: "Moderately High",
      minInvestment: 5000,
      rating: 4.4,
      performance: { oneYear: 19.7, threeYear: 18.4, fiveYear: 17.3 },
      lastUpdated: Date.now(),
      detailsUrl: "https://www.nipponindiaim.com/"
    }
  ];

  const [funds, setFunds] = useState(initialFunds);
  const [selectedFund, setSelectedFund] = useState(0);
  const [marketStatus, setMarketStatus] = useState({
    status: "open",
    lastUpdated: new Date().toLocaleTimeString()
  });
  const [isLoading, setIsLoading] = useState(false);
  // const [showForm, setShowForm] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   fundName: ''
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  // const sendWhatsAppMessage = async (message) => {
  //   try {
  //     // Replace this URL with your actual serverless function endpoint
  //     const response = await fetch('https://your-serverless-function.com/send-whatsapp', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ message })
  //     });
  //     if (!response.ok) {
  //       console.error('Failed to send WhatsApp message');
  //     }
  //   } catch (error) {
  //     console.error('Error sending WhatsApp message:', error);
  //   }
  // };

  const openDetailsForm = () => {
    // You can implement your logic here, e.g., open a modal or show a form
    window.open(currentFund.detailsUrl, '_blank');
  };

  const simulateMarketChanges = useCallback(() => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setFunds(prevFunds => {
        const updatedFunds = prevFunds.map(fund => {
          // Generate random market movement (-0.5% to +0.8%)
          const marketChange = (Math.random() * 1.3) - 0.5;
          
          // Update performance metrics
          const newCagr = Math.max(5, fund.cagr + marketChange);
          const newSize = fund.size * (1 + (Math.random() * 0.1 - 0.05));
          
          return {
            ...fund,
            cagr: parseFloat(newCagr.toFixed(1)),
            size: parseFloat(newSize.toFixed(0)),
            performance: {
              oneYear: parseFloat((fund.performance.oneYear + marketChange).toFixed(1)),
              threeYear: parseFloat((fund.performance.threeYear + (marketChange * 0.7)).toFixed(1)),
              fiveYear: parseFloat((fund.performance.fiveYear + (marketChange * 0.5)).toFixed(1))
            },
            lastUpdated: Date.now()
          };
        });
        return updatedFunds;
      });
      setMarketStatus({
        status: Math.random() > 0.3 ? "open" : "volatile",
        lastUpdated: new Date().toLocaleTimeString()
      });
      setIsLoading(false);
    }, 800);
  }, []);

  // Update market data every 8 seconds
  useEffect(() => {
    const interval = setInterval(simulateMarketChanges, 8000);
    return () => clearInterval(interval);
  }, [simulateMarketChanges]);

  // Render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Current fund details
  const currentFund = funds[selectedFund];
const [form, setForm] = useState({ name: '', email: '', message: '' });


  // Format currency
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-message', form);
      alert("Message sent via WhatsApp!");
    } catch {
    alert("Failed to send message");
  }
};

// Format currency
function formatCurrency(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    
     <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto bg-white shadow-lg rounded-xl">
    <input name="name" onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border rounded" />
    <input name="email" type="email" onChange={handleChange} placeholder="Your Email" required className="w-full p-2 border rounded" />
    <textarea name="message" onChange={handleChange} placeholder="Your Message" required className="w-full p-2 border rounded" />
    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Send to WhatsApp</button>
  </form>
    {/* Header */}
    <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Mutual Fund Dashboard
            </h1>
            <div className="flex items-center mt-1">
              <p className="text-gray-600">Real-time market updates</p>
              <span className="mx-2 text-gray-300">•</span>
              <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-1 ${
                  marketStatus.status === 'open' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></span>
                <span className="text-sm">
                  Market {marketStatus.status === 'open' ? 'open' : 'volatile'} • Updated: {marketStatus.lastUpdated}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={simulateMarketChanges}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Updating...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refresh Data
                </>
              )}
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Fund List */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Top Mutual Funds</h2>
              <div className="relative">
                <select className="bg-gray-100 border-0 rounded-lg py-2 pl-3 pr-8 text-sm focus:ring-2 focus:ring-blue-500">
                  <option>All Categories</option>
                  <option>Large Cap</option>
                  <option>Mid Cap</option>
                  <option>Small Cap</option>
                  <option>Flexi Cap</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {funds.map((fund, index) => (
                <div 
                  key={fund.id}
                  className={`bg-white border rounded-lg p-4 flex items-center cursor-pointer transition-all hover:shadow-md ${
                    selectedFund === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedFund(index)}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{fund.name.charAt(0)}</span>
                  </div>
                  <div className="ml-4 flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 truncate">{fund.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                        {fund.category}
                      </span>
                      <span className="text-sm font-semibold text-green-600">
                        {fund.cagr}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Market Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Nifty 50</div>
                  <div className="text-xl font-bold mt-1">18,256.30</div>
                  <div className="flex items-center text-green-600 text-sm mt-1">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                    +0.82% (149.85)
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                  <div className="text-sm text-gray-600">Sensex</div>
                  <div className="text-xl font-bold mt-1">61,275.80</div>
                  <div className="flex items-center text-green-600 text-sm mt-1">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                    +0.76% (462.25)
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fund Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl w-20 h-20 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{currentFund.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{currentFund.name}</h2>
                      <div className="flex items-center mt-1">
                        <span className="text-gray-600">{currentFund.category}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-green-600 font-medium">Direct Plan</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                          {currentFund.risk} Risk
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mt-2 md:mt-0 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {currentFund.cagr}% CAGR
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border border-gray-200 rounded-lg p-3">
                      <p className="text-gray-500 text-sm">Fund Size</p>
                      <p className="font-semibold text-lg">{formatCurrency(currentFund.size)}</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <p className="text-gray-500 text-sm">Min. Investment</p>
                      <p className="font-semibold text-lg">{formatCurrency(currentFund.minInvestment)}</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <p className="text-gray-500 text-sm">Rating</p>
                      <div className="flex items-center mt-1">
                        {renderStars(currentFund.rating)}
                        <span className="text-sm text-gray-600 ml-2">{currentFund.rating}/5</span>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <p className="text-gray-500 text-sm">Last Updated</p>
                      <p className="font-semibold text-sm">
                        {new Date(currentFund.lastUpdated).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-800 mb-3">Performance (CAGR %)</h3>
                    <div className="flex items-end justify-between h-40 px-4">
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                          style={{ height: `${currentFund.performance.oneYear * 5}px` }}
                        ></div>
                        <div className="mt-2 text-sm font-medium">{currentFund.performance.oneYear}%</div>
                        <div className="mt-1 text-xs text-gray-500">1Y</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                          style={{ height: `${currentFund.performance.threeYear * 5}px` }}
                        ></div>
                        <div className="mt-2 text-sm font-medium">{currentFund.performance.threeYear}%</div>
                        <div className="mt-1 text-xs text-gray-500">3Y</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                          style={{ height: `${currentFund.performance.fiveYear * 5}px` }}
                        ></div>
                        <div className="mt-2 text-sm font-medium">{currentFund.performance.fiveYear}%</div>
                        <div className="mt-1 text-xs text-gray-500">5Y</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      onClick={openDetailsForm}
                      className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Details
                    </button>
                    
                    <button className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </button>
                    
                    <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      Fact Sheet
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Market News */}
            <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Market Updates</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">RBI keeps repo rate unchanged at 6.5%</p>
                    <p className="text-sm text-gray-500 mt-1">The Reserve Bank of India maintained status quo on the benchmark interest rate for the fourth time in a row.</p>
                    <p className="text-xs text-gray-400 mt-2">2 hours ago • Economic Times</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Sensex hits all-time high of 61,275</p>
                    <p className="text-sm text-gray-500 mt-1">Indian equity benchmarks hit fresh record highs, driven by gains in banking and IT stocks.</p>
                    <p className="text-xs text-gray-400 mt-2">45 minutes ago • Business Standard</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Small cap funds outperform large caps</p>
                    <p className="text-sm text-gray-500 mt-1">Small cap mutual funds have delivered an average return of 28% in the last year.</p>
                    <p className="text-xs text-gray-400 mt-2">5 hours ago • Financial Express</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundDashboard;