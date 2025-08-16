import React, { useState, useEffect, useRef } from 'react';
import Cards2 from './Cards2';

const MutualFundCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  
  // Updated fund data with more professional color scheme
  const funds = [
    {
      id: 1,
      name: "Flexi Cap Fund",
      category: "Equity",
      returns: "17.18%",
      aum: "₹ 79,584.54 Cr.",
      risk: "Very High",
      investors: "23.4 L",
      gradient: "bg-gradient-to-br from-indigo-600 to-indigo-800"
    },
    {
      id: 2,
      name: "Balanced Advantage Fund",
      category: "Hybrid",
      returns: "15.89%",
      aum: "₹ 102,789.76 Cr.",
      risk: "High",
      investors: "15.4 L",
      gradient: "bg-gradient-to-br from-teal-600 to-teal-800"
    },
    {
      id: 3,
      name: "Large Cap Fund",
      category: "Equity",
      returns: "14.35%",
      aum: "₹ 38,905.12 Cr.",
      risk: "High",
      investors: "11.3 L",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      id: 4,
      name: "Mid Cap Fund",
      category: "Equity",
      returns: "21.31%",
      aum: "₹ 84,061.43 Cr.",
      risk: "Very High",
      investors: "33.4 L",
      gradient: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    {
      id: 5,
      name: "Small Cap Fund",
      category: "Equity",
      returns: "20.02%",
      aum: "₹ 35,780.59 Cr.",
      risk: "Very High",
      investors: "22.2 L",
      gradient: "bg-gradient-to-br from-rose-600 to-rose-800"
    },
    {
      id: 6,
      name: "Nifty 50 Index Fund",
      category: "Index",
      returns: "13.18%",
      aum: "₹ 21,042.72 Cr.",
      risk: "Moderately High",
      investors: "4.1 L",
      gradient: "bg-gradient-to-br from-emerald-600 to-emerald-800"
    },
    {
      id: 7,
      name: "Corporate Bond Fund",
      category: "Debt",
      returns: "8.42%",
      aum: "₹ 45,210.33 Cr.",
      risk: "Moderate",
      investors: "8.7 L",
      gradient: "bg-gradient-to-br from-amber-600 to-amber-800"
    },
    {
      id: 8,
      name: "Liquid Fund",
      category: "Debt",
      returns: "6.85%",
      aum: "₹ 92,456.19 Cr.",
      risk: "Low",
      investors: "18.9 L",
      gradient: "bg-gradient-to-br from-sky-600 to-sky-800"
    }
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
      case "Low":
        return "bg-green-100 text-green-800";
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
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center">
          <svg className="w-8 h-8 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          HDFC Mutual Funds
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Premium investment solutions with professional fund management
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-4 z-50 bg-white text-gray-700 p-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-110 shadow-md border border-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 z-50 bg-white text-gray-700 p-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-110 shadow-md border border-gray-200"
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
                    ? 'w-[300px] h-[380px] z-20 opacity-90 scale-90 blur-[1px]'
                    : 'w-[260px] h-[340px] z-10 opacity-70 scale-80 blur-[2px]'
              } ${
                position === 'adjacent' && index > currentIndex 
                  ? 'translate-x-[180px] rotate-2'
                  : position === 'adjacent' && index < currentIndex 
                    ? '-translate-x-[180px] -rotate-2'
                    : position === 'side' && index > currentIndex 
                      ? 'translate-x-[320px] rotate-3'
                      : position === 'side' && index < currentIndex 
                        ? '-translate-x-[320px] -rotate-3'
                        : ''
              }`}
            >
              <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col transition-all hover:shadow-xl">
                {/* Fund header with gradient */}
                <div className={`${fund.gradient} p-5`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-semibold text-white/90 uppercase tracking-wider">HDFC</div>
                      <h3 className="text-xl font-bold text-white mt-1">{fund.name}</h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-inner">
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
                  <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Returns</span>
                      <span className="text-gray-400 text-xs">since inception</span>
                    </div>
                    <div className="text-2xl font-bold text-indigo-600 mt-1">{fund.returns}</div>
                  </div>

                  <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-gray-600 text-sm">AUM (as on 30/06/25)</div>
                    <div className="text-lg font-semibold text-gray-900 mt-1">{fund.aum}</div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Riskometer
                      </div>
                      <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-block ${getRiskColor(fund.risk)}`}>
                        {fund.risk}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Investors
                      </div>
                      <div className="mt-2 font-medium text-gray-900">{fund.investors}</div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex gap-3">
                    <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Details
                    </button>
                    <button className={`flex-1 ${fund.gradient} hover:opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center shadow-md`}>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <div className={`w-10 h-5 rounded-full p-1 mr-2 ${
            isPlaying ? 'bg-indigo-600' : 'bg-gray-300'
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
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-indigo-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Current position */}
        <div className="text-gray-500 text-sm">
          {currentIndex + 1} / {funds.length}
        </div>
      </div>
      <Cards2 />
    </div>
  );
};

export default MutualFundCarousel;