import React, { useState, useEffect, useRef } from 'react';
import Cards2 from './Cards2'; // Adjust the import path as necessary

const MutualFundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  
  // Sample fund data with colorful gradients
  const funds = [
    {
      id: 1,
      name: "Flexi Cap Fund",
      category: "Equity",
      returns: "17.18%",
      aum: "₹ 79,584.54 Cr.",
      risk: "Very High",
      investors: "23.4 L",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Balanced Advantage Fund",
      category: "Hybrid",
      returns: "15.89%",
      aum: "₹ 102,789.76 Cr.",
      risk: "Very High",
      investors: "15.4 L",
      gradient: "bg-gradient-to-r from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Large Cap Fund",
      category: "Equity",
      returns: "14.35%",
      aum: "₹ 38,905.12 Cr.",
      risk: "Very High",
      investors: "11.3 L",
      gradient: "bg-gradient-to-r from-orange-500 to-red-600"
    },
    {
      id: 4,
      name: "Mid Cap Fund",
      category: "Equity",
      returns: "21.31%",
      aum: "₹ 84,061.43 Cr.",
      risk: "Very High",
      investors: "33.4 L",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-600"
    },
    {
      id: 5,
      name: "Small Cap Fund",
      category: "Equity",
      returns: "20.02%",
      aum: "₹ 35,780.59 Cr.",
      risk: "Very High",
      investors: "22.2 L",
      gradient: "bg-gradient-to-r from-pink-500 to-rose-600"
    },
    {
      id: 6,
      name: "Nifty 50 Index Fund",
      category: "Index",
      returns: "13.18%",
      aum: "₹ 21,042.72 Cr.",
      risk: "Very High",
      investors: "4.1 L",
      gradient: "bg-gradient-to-r from-indigo-500 to-blue-600"
    },
     {
      id: 1,
      name: "Flexi Cap Fund",
      category: "Equity",
      returns: "17.18%",
      aum: "₹ 79,584.54 Cr.",
      risk: "Very High",
      investors: "23.4 L",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Balanced Advantage Fund",
      category: "Hybrid",
      returns: "15.89%",
      aum: "₹ 102,789.76 Cr.",
      risk: "Very High",
      investors: "15.4 L",
      gradient: "bg-gradient-to-r from-green-500 to-teal-600"
    },
    {
      id: 3,
      name: "Large Cap Fund",
      category: "Equity",
      returns: "14.35%",
      aum: "₹ 38,905.12 Cr.",
      risk: "Very High",
      investors: "11.3 L",
      gradient: "bg-gradient-to-r from-orange-500 to-red-600"
    },
    {
      id: 4,
      name: "Mid Cap Fund",
      category: "Equity",
      returns: "21.31%",
      aum: "₹ 84,061.43 Cr.",
      risk: "Very High",
      investors: "33.4 L",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-600"
    },
    {
      id: 5,
      name: "Small Cap Fund",
      category: "Equity",
      returns: "20.02%",
      aum: "₹ 35,780.59 Cr.",
      risk: "Very High",
      investors: "22.2 L",
      gradient: "bg-gradient-to-r from-pink-500 to-rose-600"
    },
    {
      id: 6,
      name: "Nifty 50 Index Fund",
      category: "Index",
      returns: "13.18%",
      aum: "₹ 21,042.72 Cr.",
      risk: "Very High",
      investors: "4.1 L",
      gradient: "bg-gradient-to-r from-indigo-500 to-blue-600"
    },
    {
    "id": 1,
    "name": "NIFTY Midcap 150 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "32.09%",
    "aum": "₹ 374.75 Cr.",
    "risk": "Very High",
    "investors": "52.9 K",
    "provider": "HDFC"
  },
  {
    "id": 2,
    "name": "NIFTY Midcap 150 ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "30.40%",
    "aum": "₹ 95.58 Cr.",
    "risk": "Very High",
    "investors": "52.9 K",
    "provider": "HDFC"
  },
  {
    "id": 3,
    "name": "NIFTY Smallcap 250 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "33.20%",
    "aum": "₹ 530.72 Cr.",
    "risk": "Very High",
    "investors": "74.9 K",
    "provider": "HDFC"
  },
  {
    "id": 4,
    "name": "NIFTY Smallcap 250 ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "30.88%",
    "aum": "₹ 1,316.29 Cr.",
    "risk": "Very High",
    "investors": "2.2 L",
    "provider": "HDFC"
  },
  {
    "id": 5,
    "name": "BSE 500 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "22.42%",
    "aum": "₹ 253.59 Cr.",
    "risk": "Very High",
    "investors": "14.6 K",
    "provider": "HDFC"
  },
  {
    "id": 6,
    "name": "BSE 500 ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "20.29%",
    "aum": "₹ 17.31 Cr.",
    "risk": "Very High",
    "investors": "12.4 K",
    "provider": "HDFC"
  },
  {
    "id": 7,
    "name": "NIFTY Bank Exchange Traded Fund",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "21.66%",
    "aum": "₹ 2,805.16 Cr.",
    "risk": "Very High",
    "investors": "22.9 K",
    "provider": "HDFC"
  },
  {
    "id": 8,
    "name": "NIFTY50 Equal Weight Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "15.78%",
    "aum": "₹ 1,543.77 Cr.",
    "risk": "Very High",
    "investors": "54.6 K",
    "provider": "HDFC"
  },
  
  ];

  // Function to determine risk color
  const getRiskColor = (riskLevel) => {
    switch(riskLevel) {
      case "Very High":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Moderately High":
        return "bg-yellow-100 text-yellow-800";
      case "Moderate":
        return "bg-blue-100 text-blue-800";
      case "Low to Moderate":
        return "bg-green-100 text-green-800";
      case "Low":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Auto play functionality
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % funds.length);
      }, 3000);
    }
    
    return () => clearInterval(autoPlayRef.current);
  }, [isPlaying, funds.length]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? funds.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % funds.length);
  };

  // Toggle autoplay
  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Calculate positions for each card
  const getCardPosition = (index) => {
    const total = funds.length;
    const diff = (index - currentIndex + total) % total;
    
    if (diff === 0) return 'center';
    if (diff === 1 || diff === total - 1) return 'adjacent';
    if (diff === 2 || diff === total - 2) return 'side';
    return 'hidden';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
          <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          HDFC Mutual Funds
        </h1>
        <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
          Premium investment solutions with professional fund management
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 z-50 bg-gray-800/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition-all transform hover:scale-110 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 z-50 bg-gray-800/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-700 transition-all transform hover:scale-110 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards */}
        {funds.map((fund, index) => {
          const position = getCardPosition(index);
          
          if (position === 'hidden') return null;
          
          return (
            <div 
              key={fund.id}
              className={`absolute transition-all duration-700 ease-in-out transform ${
                position === 'center' 
                  ? 'w-[340px] h-[420px] z-30 opacity-100 scale-100'
                  : position === 'adjacent' 
                    ? 'w-[300px] h-[380px] z-20 opacity-80 scale-90 blur-sm'
                    : 'w-[260px] h-[340px] z-10 opacity-60 scale-80 blur-md'
              } ${
                position === 'adjacent' && index > currentIndex 
                  ? 'translate-x-[180px] rotate-6'
                  : position === 'adjacent' && index < currentIndex 
                    ? '-translate-x-[180px] -rotate-6'
                    : position === 'side' && index > currentIndex 
                      ? 'translate-x-[320px] rotate-12'
                      : position === 'side' && index < currentIndex 
                        ? '-translate-x-[320px] -rotate-12'
                        : ''
              }`}
            >
              <div className="h-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 flex flex-col">
                {/* Fund header with gradient */}
                <div className={`${fund.gradient} p-5`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-semibold text-white/80 uppercase tracking-wider">HDFC</div>
                      <h3 className="text-xl font-bold text-white mt-1">{fund.name}</h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">H</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">{fund.category}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <div className="mt-4 bg-gray-700/50 p-4 rounded-xl backdrop-blur-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">Returns</span>
                      <span className="text-gray-400 text-xs">since inception</span>
                    </div>
                    <div className="text-2xl font-bold text-green-400 mt-1">{fund.returns}</div>
                  </div>

                  <div className="mt-4 bg-gray-700/50 p-4 rounded-xl backdrop-blur-sm">
                    <div className="text-gray-300 text-sm">AUM (as on 30/06/25)</div>
                    <div className="text-lg font-semibold text-white mt-1">{fund.aum}</div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 p-4 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center text-gray-300 text-sm">
                        <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Riskometer
                      </div>
                      <div className={`mt-2 text-sm px-3 py-1 rounded-full inline-block ${getRiskColor(fund.risk)}`}>
                        {fund.risk}
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/50 p-4 rounded-xl backdrop-blur-sm">
                      <div className="flex items-center text-gray-300 text-sm">
                        <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Investors
                      </div>
                      <div className="mt-2 font-medium text-white">{fund.investors}</div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex gap-3">
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Details
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Invest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center space-x-6">
        {/* Autoplay toggle */}
        <button 
          onClick={toggleAutoPlay}
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <div className={`w-10 h-5 rounded-full p-1 mr-2 ${
            isPlaying ? 'bg-blue-500' : 'bg-gray-700'
          }`}>
            <div className={`bg-white w-3 h-3 rounded-full transition-transform ${
              isPlaying ? 'translate-x-5' : ''
            }`}></div>
          </div>
          <span>Auto Play</span>
        </button>
        
        {/* Indicators */}
        <div className="flex space-x-2">
          {funds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Current position */}
        <div className="text-gray-400">
          {currentIndex + 1} / {funds.length}
        </div>
      </div>
      <Cards2 />
    </div>
  );
};

export default MutualFundCarousel;