import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const initialFunds = [
  {
    id: 1,
    name: "Axis Mutual Fund",
    category: "Large Cap",
    cagr: 12.5,
    size: 15000,
    minInvestment: 500,
    risk: "Low",
    rating: 4.5,
    src: "/Image/axis_groww.png",
    performance: { oneYear: 11.2, threeYear: 13.1, fiveYear: 12.5 },
    detailsUrl: "https://www.axisbank.com/bluechip-fund",
    lastUpdated: Date.now()
  },
  {
    id: 2,
    name: "Mirae Asset Emerging Mutual Fund",
    category: "Large & Mid Cap",
    cagr: 15.2,
    size: 18000,
    minInvestment: 1000,
    risk: "Moderate",
    rating: 4.7,
    src: "/Image/mirae_groww.png",
    performance: { oneYear: 14.8, threeYear: 16.2, fiveYear: 15.2 },
    detailsUrl: "https://www.miraeassetmf.co.in/emerging-bluechip",
    lastUpdated: Date.now()
  },
  {
    id: 3,
    name: "SBI Mutual Fund",
    category: "Small Cap",
    cagr: 18.9,
    size: 9000,
    minInvestment: 500,
    risk: "High",
    rating: 4.3,
    src: "/Image/sbi_groww.png",
    performance: { oneYear: 17.5, threeYear: 19.1, fiveYear: 18.9 },
    detailsUrl: "https://www.sbimf.com/small-cap-fund",
    lastUpdated: Date.now()
  },
  {
    id: 4,
    name: "Aditya Birla Sun Life mutual  Fund",
    category: "Flexi Cap",
    cagr: 14.1,
    size: 12000,
    minInvestment: 1000,
    risk: "Moderate",
    rating: 4.8,
    src: "/Image/aditya_groww.png",
    performance: { oneYear: 13.7, threeYear: 15.0, fiveYear: 14.1 },
    detailsUrl: "https://www.ppfas.com/flexi-cap-fund",
    lastUpdated: Date.now()
  },
  {
    id: 5,
    name: "HDFC Hybrid Equity Fund",
    category: "Hybrid",
    cagr: 10.7,
    size: 8000,
    minInvestment: 500,
    risk: "Low",
    rating: 4.1,
    src: "/Image/hdfc_groww.png",
    performance: { oneYear: 9.8, threeYear: 11.2, fiveYear: 10.7 },
    detailsUrl: "https://www.hdfcfund.com/hybrid-equity",
    lastUpdated: Date.now()
  },
    {
    id: 6,
    name: "Kotak Mahindra Mutual  Fund",
    category: "Hybrid",
    cagr: 10.7,
    size: 8000,
    minInvestment: 500,
    risk: "Low",
    rating: 4.1,
    src: "/Image/kotak_groww.png",
    performance: { oneYear: 9.8, threeYear: 11.2, fiveYear: 10.7 },
    detailsUrl: "https://www.hdfcfund.com/hybrid-equity",
    lastUpdated: Date.now()
  },
    {
    id: 7,
    name: "ITI Mutual Fund",
    category: "Hybrid",
    cagr: 10.7,
    size: 8000,
    minInvestment: 500,
    risk: "Low",
    rating: 4.1,
    src: "/Image/iti_groww.png",
    performance: { oneYear: 9.8, threeYear: 11.2, fiveYear: 10.7 },
    detailsUrl: "https://www.hdfcfund.com/hybrid-equity",
    lastUpdated: Date.now()
  }
];

const MutualFundDashboard = () => {
  const [funds, setFunds] = useState(initialFunds);
  const [selectedFund, setSelectedFund] = useState(initialFunds[0]);
  const [marketStatus, setMarketStatus] = useState({
    status: "open",
    lastUpdated: new Date().toLocaleTimeString()
  });
  const [isLoading, setIsLoading] = useState(false);

  // Format currency
  function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
  }

  // Simulate market changes
  const simulateMarketChanges = useCallback(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      setFunds(prevFunds => {
        const updatedFunds = prevFunds.map(fund => {
          const marketChange = (Math.random() * 1.3) - 0.5;
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

  // Open fund details
  const openDetailsForm = (fund) => {
    window.open(fund.detailsUrl, '_blank');
  };
  
  const navigate = useNavigate();
  const Handleclick = () => {
    navigate('/cards');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to- text-black py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Mutual Fund Explorer</h1>
            <p className="text-blue-100 mt-1">Discover top performing funds</p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg">
            Market Status: <span className="font-semibold">{marketStatus.status === "open" ? "Open" : "Volatile"}</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Top Mutual Funds</h2>
                <div className="text-sm text-gray-600">
                  Updated: {marketStatus.lastUpdated}
                </div>
              </div>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {funds.map(fund => (
                  <div 
                    key={fund.id} 
                    className={`border rounded-xl p-4 transition-all cursor-pointer ${
                      selectedFund.id === fund.id 
                        ? 'border-blue-500 bg-blue-50 shadow-sm' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedFund(fund)}
                  >
                    <div className="flex items-center">
                      {/* Replaced initial with your image */}
                      <div className="rounded-xl w-12 h-12 flex items-center justify-center mr-4 bg-white p-1 border">
                        <img 
                          src={fund.src} 
                          alt={fund.name}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <h3 className="font-bold text-gray-800 truncate">{fund.name}</h3>
                          <div className="flex items-center ml-2">
                            <span className="text-green-600 font-medium mr-2">{fund.cagr}%</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full whitespace-nowrap">
                              {fund.risk}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <span className="text-gray-600 text-sm truncate mr-2">{fund.category}</span>
                          <div className="text-sm text-gray-600 whitespace-nowrap">
                            {fund.rating} ★
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 mt-4">
                      <div className="text-center">
                        <p className="text-gray-500 text-sm">Fund Size</p>
                        <p className="font-semibold truncate">{formatCurrency(fund.size)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500 text-sm">Min. Invest</p>
                        <p className="font-semibold truncate">{formatCurrency(fund.minInvestment)}</p>
                      </div>
                      <div className="text-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            openDetailsForm(fund);
                          }}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Fund Details */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <div className="flex flex-col">
              <div className="flex-shrink-0 mb-4">
                {/* Replaced initial with your larger image */}
                <div className="rounded-xl w-20 h-20 flex items-center justify-center bg-white p-1 border border-blue-300">
                  <img 
                    src={selectedFund.src} 
                    alt={selectedFund.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap justify-between items-start">
                  <div className="min-w-0">
                    <h2 className="text-2xl font-bold text-gray-800 truncate">{selectedFund.name}</h2>
                    <div className="flex flex-wrap items-center mt-1">
                      <span className="text-gray-600 truncate">{selectedFund.category}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-green-600 font-medium truncate">Direct Plan</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full truncate">
                        {selectedFund.risk} Risk
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mt-2 flex items-center whitespace-nowrap">
                    {selectedFund.cagr}% CAGR
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-3">
                    <p className="text-gray-500 text-sm">Fund Size</p>
                    <p className="font-semibold text-lg truncate">{formatCurrency(selectedFund.size)}</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    <p className="text-gray-500 text-sm">Min. Investment</p>
                    <p className="font-semibold text-lg truncate">{formatCurrency(selectedFund.minInvestment)}</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    <p className="text-gray-500 text-sm">Rating</p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-600">{selectedFund.rating} ★ (out of 5)</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    <p className="text-gray-500 text-sm">Last Updated</p>
                    <p className="font-semibold text-sm truncate">
                      {new Date(selectedFund.lastUpdated).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-800 mb-3">Performance (CAGR %)</h3>
                  <div className="flex items-end justify-between h-32 px-4">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                        style={{ height: `${selectedFund.performance.oneYear * 5}px` }}
                      ></div>
                      <div className="mt-2 text-sm font-medium">{selectedFund.performance.oneYear}%</div>
                      <div className="mt-1 text-xs text-gray-500">1Y</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                        style={{ height: `${selectedFund.performance.threeYear * 5}px` }}
                      ></div>
                      <div className="mt-2 text-sm font-medium">{selectedFund.performance.threeYear}%</div>
                      <div className="mt-1 text-xs text-gray-500">3Y</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                        style={{ height: `${selectedFund.performance.fiveYear * 5}px` }}
                      ></div>
                      <div className="mt-2 text-sm font-medium">{selectedFund.performance.fiveYear}%</div>
                      <div className="mt-1 text-xs text-gray-500">5Y</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={Handleclick}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium"
                  >
                    View Details
                  </button>
                  
                  <button className="px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium">
                    WhatsApp
                  </button>
                  
                  <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium">
                    Fact Sheet
                  </button>
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