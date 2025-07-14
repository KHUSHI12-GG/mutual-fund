import React, { useState, useMemo } from 'react';

const MutualFundGrid = () => {
  // Funds data with unique IDs
  const allFunds = [
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
  
{
    "id": 9,
    "name": "NIFTY Private Bank ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "10.43%",
    "aum": "₹ 341.21 Cr.",
    "risk": "Very High",
    "investors": "9.8 K",
    "provider": "HDFC"
  },
  {
    "id": 10,
    "name": "NIFTY100 Equal Weight Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "15.95%",
    "aum": "₹ 381.95 Cr.",
    "risk": "Very High",
    "investors": "14.9 K",
    "provider": "HDFC"
  },
  {
    "id": 11,
    "name": "NIFTY IT ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "10.82%",
    "aum": "₹ 51.76 Cr.",
    "risk": "Very High",
    "investors": "7.5 K",
    "provider": "HDFC"
  },
  {
    "id": 12,
    "name": "Nifty G-Sec Dec 2026 Index",
    "category": "Index",
    "subCategory": "Index",
    "returns": "7.99%",
    "aum": "₹ 1,200.97 Cr.",
    "risk": "Low to Moderate",
    "investors": "2.3 K",
    "provider": "HDFC"
  },
  {
    "id": 13,
    "name": "Nifty G-Sec Jun 2027 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "8.24%",
    "aum": "₹ 752.55 Cr.",
    "risk": "Low to Moderate",
    "investors": "1.5 K",
    "provider": "HDFC"
  },
  {
    "id": 14,
    "name": "NIFTY 100 Quality 30 ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "15.49%",
    "aum": "₹ 23.59 Cr.",
    "risk": "Very High",
    "investors": "12.1 K",
    "provider": "HDFC"
  },
  {
    "id": 15,
    "name": "NIFTY50 VALUE 20 ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "17.74%",
    "aum": "₹ 37.78 Cr.",
    "risk": "Very High",
    "investors": "5.2 K",
    "provider": "HDFC"
  },
  {
    "id": 16,
    "name": "NIFTY G-Sec Apr 2029 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "9.75%",
    "aum": "₹ 172.14 Cr.",
    "risk": "Moderate",
    "investors": "1.5 K",
    "provider": "HDFC"
  },
  {
    "id": 17,
    "name": "Ultra Short Term Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "6.67%",
    "aum": "₹ 17,166.90 Cr.",
    "risk": "Low to Moderate",
    "investors": "56.6 K",
    "provider": "HDFC"
  },
  {
    "id": 18,
    "name": "Nifty G-Sec Jul 2031 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "9.91%",
    "aum": "₹ 717.38 Cr.",
    "risk": "Moderate",
    "investors": "1.3 K",
    "provider": "HDFC"
  },
  {
    "id": 19,
    "name": "ELSS Tax saver",
    "category": "Equity Linked Savings Scheme ELSS",
    "subCategory": "ELSS",
    "returns": "15.62%",
    "aum": "₹ 16,908.00 Cr.",
    "risk": "Very High",
    "investors": "7.8 L",
    "provider": "HDFC"
  },
  {
    "id": 20,
    "name": "NIFTY GROWTH SECTORS 15 ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "10.20%",
    "aum": "₹ 24.35 Cr.",
    "risk": "Very High",
    "investors": "12.3 K",
    "provider": "HDFC"
  },
  {
    "id": 21,
    "name": "Manufacturing Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "5.04%",
    "aum": "₹ 12,169.75 Cr.",
    "risk": "Very High",
    "investors": "7.6 L",
    "provider": "HDFC"
  },
  {
    "id": 22,
    "name": "Short Term Debt Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "8.19%",
    "aum": "₹ 17,402.27 Cr.",
    "risk": "Moderate",
    "investors": "86.0 K",
    "provider": "HDFC"
  },
  {
    "id": 23,
    "name": "Retirement Savings Fund- Hybrid- Debt Plan",
    "category": "Solution Oriented",
    "subCategory": "Solution-oriented",
    "returns": "10.07%",
    "aum": "₹ 162.62 Cr.",
    "risk": "Moderately High",
    "investors": "5.4 K",
    "provider": "HDFC"
  },
  {
    "id": 24,
    "name": "Retirement Savings Fund Equity Plan",
    "category": "Solution Oriented",
    "subCategory": "Solution-oriented",
    "returns": "20.57%",
    "aum": "₹ 6,700.97 Cr.",
    "risk": "Very High",
    "investors": "2.4 L",
    "provider": "HDFC"
  },
  {
    "id": 25,
    "name": "NIFTY200 Momentum 30 ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "19.90%",
    "aum": "₹ 102.30 Cr.",
    "risk": "Very High",
    "investors": "33.3 K",
    "provider": "HDFC"
  },
  {
    "id": 26,
    "name": "Nifty G-Sec Sep 2032 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "10.01%",
    "aum": "₹ 653.69 Cr.",
    "risk": "Moderate",
    "investors": "1.2 K",
    "provider": "HDFC"
  },
  {
    "id": 27,
    "name": "Retirement Savings Fund - Hybrid Equity Plan",
    "category": "Solution Oriented",
    "subCategory": "Solution-oriented",
    "returns": "17.21%",
    "aum": "₹ 1,698.30 Cr.",
    "risk": "Very High",
    "investors": "36.1 K",
    "provider": "HDFC"
  },
  {
    "id": 28,
    "name": "Multi Cap Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "20.95%",
    "aum": "₹ 18,512.73 Cr.",
    "risk": "Very High",
    "investors": "10.7 L",
    "provider": "HDFC"
  },
  {
    "id": 29,
    "name": "Overnight Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "6.04%",
    "aum": "₹ 9,709.35 Cr.",
    "risk": "Low",
    "investors": "21.4 K",
    "provider": "HDFC"
  },
  {
    "id": 30,
    "name": "Multi-Asset Fund",
    "category": "Hybrid",
    "subCategory": "Hybrid_1",
    "returns": "12.03%",
    "aum": "₹ 4,544.56 Cr.",
    "risk": "High",
    "investors": "99.5 K",
    "provider": "HDFC"
  },
  {
    "id": 31,
    "name": "Money Market Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "7.38%",
    "aum": "₹ 31,769.06 Cr.",
    "risk": "Low to Moderate",
    "investors": "31.0 K",
    "provider": "HDFC"
  },
  {
    "id": 32,
    "name": "NIFTY100 Low Volatility 30 ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "18.98%",
    "aum": "₹ 15.95 Cr.",
    "risk": "Very High",
    "investors": "8.2 K",
    "provider": "HDFC"
  },
  {
    "id": 33,
    "name": "Medium Term Debt Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "8.33%",
    "aum": "₹ 3,870.84 Cr.",
    "risk": "Moderately High",
    "investors": "17.3 K",
    "provider": "HDFC"
  },
  {
    "id": 34,
    "name": "NIFTY G-Sec Jun 2036 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "11.37%",
    "aum": "₹ 885.17 Cr.",
    "risk": "Moderate",
    "investors": "4.0 K",
    "provider": "HDFC"
  },
  {
    "id": 35,
    "name": "Large and Mid Cap Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "14.18%",
    "aum": "₹ 26,848.85 Cr.",
    "risk": "Very High",
    "investors": "13.2 L",
    "provider": "HDFC"
  },
  {
    "id": 36,
    "name": "Low Duration Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "7.76%",
    "aum": "₹ 22,750.91 Cr.",
    "risk": "Low to Moderate",
    "investors": "1.4 L",
    "provider": "HDFC"
  },
  {
    "id": 37,
    "name": "Liquid Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "6.84%",
    "aum": "₹ 63,547.69 Cr.",
    "risk": "Low to Moderate",
    "investors": "1.4 L",
    "provider": "HDFC"
  },
  {
    "id": 38,
    "name": "Infrastructure Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "13.25%",
    "aum": "₹ 2,591.14 Cr.",
    "risk": "Very High",
    "investors": "2.7 L",
    "provider": "HDFC"
  },
  {
    "id": 39,
    "name": "Nifty SDL Oct 2026 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "8.33%",
    "aum": "₹ 199.61 Cr.",
    "risk": "Low to Moderate",
    "investors": "1.7 K",
    "provider": "HDFC"
  },
  {
    "id": 40,
    "name": "Gold ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "10.78%",
    "aum": "₹ 10,224.15 Cr.",
    "risk": "High",
    "investors": "1.7 L",
    "provider": "HDFC"
  },
  {
    "id": 41,
    "name": "Income Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "7.51%",
    "aum": "₹ 928.89 Cr.",
    "risk": "Moderate",
    "investors": "12.1 K",
    "provider": "HDFC"
  },
  {
    "id": 42,
    "name": "SILVER ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "23.90%",
    "aum": "₹ 933.35 Cr.",
    "risk": "Very High",
    "investors": "44.2 K",
    "provider": "HDFC"
  },
  {
    "id": 43,
    "name": "NIFTY SDL Plus G-Sec Jun 2027 40:60 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "8.42%",
    "aum": "₹ 48.86 Cr.",
    "risk": "Low to Moderate",
    "investors": "1.1 K",
    "provider": "HDFC"
  },
  {
    "id": 44,
    "name": "Hybrid Equity Fund",
    "category": "Hybrid",
    "subCategory": "Hybrid_1",
    "returns": "15.21%",
    "aum": "₹ 24,854.06 Cr.",
    "risk": "Very High",
    "investors": "5.0 L",
    "provider": "HDFC"
  },
  {
    "id": 45,
    "name": "Hybrid Debt Fund",
    "category": "Hybrid",
    "subCategory": "Hybrid_1",
    "returns": "10.13%",
    "aum": "₹ 3,401.26 Cr.",
    "risk": "Moderately High",
    "investors": "52.8 K",
    "provider": "HDFC"
  },
  {
    "id": 46,
    "name": "Housing Opportunities Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "12.26%",
    "aum": "₹ 1,361.41 Cr.",
    "risk": "Very High",
    "investors": "66.6 K",
    "provider": "HDFC"
  },
  {
    "id": 47,
    "name": "NIFTY 50 Exchange Traded Fund",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "14.50%",
    "aum": "₹ 4,761.80 Cr.",
    "risk": "Very High",
    "investors": "33.6 K",
    "provider": "HDFC"
  },
  {
    "id": 48,
    "name": "Gilt Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "7.90%",
    "aum": "₹ 3,045.35 Cr.",
    "risk": "Moderate",
    "investors": "8.4 K",
    "provider": "HDFC"
  },
  {
    "id": 49,
    "name": "Focused Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "16.03%",
    "aum": "₹ 20,868.27 Cr.",
    "risk": "Very High",
    "investors": "5.2 L",
    "provider": "HDFC"
  },
  {
    "id": 50,
    "name": "Floating Rate Debt Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "7.97%",
    "aum": "₹ 15,321.94 Cr.",
    "risk": "Low to Moderate",
    "investors": "27.7 K",
    "provider": "HDFC"
  },
  {
    "id": 51,
    "name": "Multi-Asset Active FOF",
    "category": "Fund of Funds",
    "subCategory": "Fund_of_Funds",
    "returns": "16.90%",
    "aum": "₹ 4,211.40 Cr.",
    "risk": "High",
    "investors": "79.8 K",
    "provider": "HDFC"
  },
  {
    "id": 52,
    "name": "Equity Savings Fund",
    "category": "Hybrid",
    "subCategory": "Hybrid_1",
    "returns": "10.55%",
    "aum": "₹ 5,662.63 Cr.",
    "risk": "Moderately High",
    "investors": "65.9 K",
    "provider": "HDFC"
  },
  {
    "id": 53,
    "name": "Dividend Yield Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "23.97%",
    "aum": "₹ 6,597.36 Cr.",
    "risk": "Very High",
    "investors": "2.1 L",
    "provider": "HDFC"
  },
  {
    "id": 54,
    "name": "Developed World Equity Passive FOF",
    "category": "Fund of Funds",
    "subCategory": "Fund_of_Funds",
    "returns": "12.17%",
    "aum": "₹ 1,325.55 Cr.",
    "risk": "Very High",
    "investors": "40.6 K",
    "provider": "HDFC"
  },
  {
    "id": 55,
    "name": "Income Plus Arbitrage Active FOF",
    "category": "Fund of Funds",
    "subCategory": "Fund_of_Funds",
    "returns": "11.67%",
    "aum": "₹ 992.87 Cr.",
    "risk": "Moderate",
    "investors": "5.3 K",
    "provider": "HDFC"
  },
  {
    "id": 56,
    "name": "Dynamic Debt Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "7.99%",
    "aum": "₹ 838.08 Cr.",
    "risk": "Moderate",
    "investors": "11.2 K",
    "provider": "HDFC"
  },
  {
    "id": 57,
    "name": "Credit Risk Debt Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "8.89%",
    "aum": "₹ 7,085.89 Cr.",
    "risk": "High",
    "investors": "35.7 K",
    "provider": "HDFC"
  },
  {
    "id": 58,
    "name": "Corporate Bond Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "8.28%",
    "aum": "₹ 35,685.99 Cr.",
    "risk": "Moderate",
    "investors": "72.8 K",
    "provider": "HDFC"
  },
  {
    "id": 59,
    "name": "Value Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "16.75%",
    "aum": "₹ 7,443.45 Cr.",
    "risk": "Very High",
    "investors": "2.3 L",
    "provider": "HDFC"
  },
  {
    "id": 60,
    "name": "Children's Fund",
    "category": "Solution Oriented",
    "subCategory": "Solution-oriented",
    "returns": "16.07%",
    "aum": "₹ 10,368.60 Cr.",
    "risk": "Very High",
    "investors": "2.4 L",
    "provider": "HDFC"
  },
  {
    "id": 61,
    "name": "Banking and PSU Debt Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "8.16%",
    "aum": "₹ 6,093.53 Cr.",
    "risk": "Moderate",
    "investors": "20.5 K",
    "provider": "HDFC"
  },
  {
    "id": 62,
    "name": "Banking & Financial Services Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "15.89%",
    "aum": "₹ 4,289.80 Cr.",
    "risk": "Very High",
    "investors": "1.6 L",
    "provider": "HDFC"
  },
  {
    "id": 63,
    "name": "Gold ETF Fund of Fund",
    "category": "Fund of Funds",
    "subCategory": "Fund_of_Funds",
    "returns": "8.39%",
    "aum": "₹ 4,271.57 Cr.",
    "risk": "High",
    "investors": "2.2 L",
    "provider": "HDFC"
  },
  {
    "id": 64,
    "name": "CRISIL-IBX Financial Services 3-6 Months Debt Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "NA",
    "inceptionDate": "01-01-70",
    "aum": "₹ 314.68 Cr.",
    "risk": "Low to Moderate",
    "investors": "2.6 K",
    "provider": "HDFC"
  },
  {
    "id": 65,
    "name": "Nifty Top 20 Equal Weight Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "NA",
    "inceptionDate": "25-03-25",
    "aum": "₹ 82.88 Cr.",
    "risk": "Very High",
    "investors": "16.3 K",
    "provider": "HDFC"
  },
  {
    "id": 66,
    "name": "Long Duration Debt Fund",
    "category": "Debt",
    "subCategory": "Close Ended",
    "returns": "10.18%",
    "aum": "₹ 5,508.27 Cr.",
    "risk": "Moderate",
    "investors": "19.9 K",
    "provider": "HDFC"
  },
  {
    "id": 67,
    "name": "Nifty100 Quality 30 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "NA",
    "inceptionDate": "20-02-25",
    "aum": "₹ 184.34 Cr.",
    "risk": "Very High",
    "investors": "17.1 K",
    "provider": "HDFC"
  },
  {
    "id": 68,
    "name": "Nifty India Digital Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "NA",
    "inceptionDate": "17-12-24",
    "aum": "₹ 218.56 Cr.",
    "risk": "Very High",
    "investors": "28.6 K",
    "provider": "HDFC"
  },
  {
    "id": 69,
    "name": "Nifty LargeMidcap 250 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "NA",
    "inceptionDate": "09-10-24",
    "aum": "₹ 493.93 Cr.",
    "risk": "Very High",
    "investors": "66.7 K",
    "provider": "HDFC"
  },
  {
    "id": 70,
    "name": "Nifty500 Multicap 50:25:25 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "NA",
    "inceptionDate": "23-08-24",
    "aum": "₹ 490.29 Cr.",
    "risk": "Very High",
    "investors": "70.1 K",
    "provider": "HDFC"
  },
  {
    "id": 71,
    "name": "NIFTY100 Low Volatility 30 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "NA",
    "inceptionDate": "10-07-24",
    "aum": "₹ 337.15 Cr.",
    "risk": "Very High",
    "investors": "34.8 K",
    "provider": "HDFC"
  },
  {
    "id": 72,
    "name": "Arbitrage Fund",
    "category": "Hybrid",
    "subCategory": "Hybrid_1",
    "returns": "6.43%",
    "aum": "₹ 21,068.10 Cr.",
    "risk": "Low",
    "investors": "29.6 K",
    "provider": "HDFC"
  },
  {
    "id": 73,
    "name": "NIFTY Realty Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "5.53%",
    "aum": "₹ 130.01 Cr.",
    "risk": "Very High",
    "investors": "27.2 K",
    "provider": "HDFC"
  },
  {
    "id": 74,
    "name": "NIFTY200 Momentum 30 Index Fund",
    "category": "Index",
    "subCategory": "Index",
    "returns": "1.93%",
    "aum": "₹ 762.59 Cr.",
    "risk": "Very High",
    "investors": "67.6 K",
    "provider": "HDFC"
  },
  {
    "id": 75,
    "name": "NIFTY PSU Bank ETF",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "9.07%",
    "aum": "₹ 25.15 Cr.",
    "risk": "Very High",
    "investors": "10.8 K",
    "provider": "HDFC"
  },
  {
    "id": 76,
    "name": "Pharma and Healthcare Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "35.59%",
    "aum": "₹ 1,786.18 Cr.",
    "risk": "Very High",
    "investors": "1.9 L",
    "provider": "HDFC"
  },
  {
    "id": 77,
    "name": "Technology Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "20.41%",
    "aum": "₹ 1,469.67 Cr.",
    "risk": "Very High",
    "investors": "1.3 L",
    "provider": "HDFC"
  },
  {
    "id": 78,
    "name": "Nifty 1D Rate Liquid ETF - Growth",
    "category": "ETF",
    "subCategory": "ETF",
    "returns": "5.81%",
    "aum": "₹ 39.06 Cr.",
    "risk": "Low",
    "investors": "NA",
    "provider": "HDFC"
  },
  {
    "id": 79,
    "name": "Transportation and Logistics Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "27.55%",
    "aum": "₹ 1,394.51 Cr.",
    "risk": "Very High",
    "investors": "1.1 L",
    "provider": "HDFC"
  },
  {
    "id": 80,
    "name": "Charity Fund for Cancer Cure (A Fixed Maturity Plan)",
    "category": "Close Ended",
    "subCategory": "Solution-oriented (1)",
    "returns": "8.32%",
    "aum": "₹ 192.51 Cr.",
    "risk": "Low to Moderate",
    "investors": "1.6 K",
    "provider": "HDFC"
  },
  {
    "id": 81,
    "name": "Non-Cyclical Consumer Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "19.85%",
    "aum": "₹ 1,004.09 Cr.",
    "risk": "Very High",
    "investors": "64.5 K",
    "provider": "HDFC"
  },
  {
    "id": 82,
    "name": "Defence Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "59.57%",
    "aum": "₹ 7,055.48 Cr.",
    "risk": "Very High",
    "investors": "9.0 L",
    "provider": "HDFC"
  },
  {
    "id": 83,
    "name": "Silver ETF Fund of Fund",
    "category": "Fund of Funds",
    "subCategory": "Fund_of_Funds",
    "returns": "21.24%",
    "aum": "₹ 403.31 Cr.",
    "risk": "Very High",
    "investors": "23.4 K",
    "provider": "HDFC"
  },
  {
    "id": 84,
    "name": "Business Cycle Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "16.38%",
    "aum": "₹ 2,954.61 Cr.",
    "risk": "Very High",
    "investors": "1.4 L",
    "provider": "HDFC"
  },
  {
    "id": 85,
    "name": "MNC Fund",
    "category": "Equity",
    "subCategory": "Equity",
    "returns": "13.41%",
    "aum": "₹ 596.63 Cr.",
    "risk": "Very High",
    "investors": "44.9 K",
    "provider": "HDFC"
  }
  ];

  // State for currently displayed funds
  const [visibleFunds, setVisibleFunds] = useState(12);
  const fundsPerPage = 12;
  
  // State for fund details popup
  const [selectedFund, setSelectedFund] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // State for details form popup
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pan: '',
    fundId: null
  });

  // Get currently visible funds
  const currentFunds = allFunds.slice(0, visibleFunds);
  const hasMoreFunds = visibleFunds < allFunds.length;

  // Function to load more funds
  const loadMoreFunds = () => setVisibleFunds(prev => prev + fundsPerPage);

  // Function to handle view details click
  const handleViewDetails = (fund) => {
    setSelectedFund(fund);
    setIsPopupOpen(true);
  };

  // Function to handle details form click
  const handleDetailsClick = (fund) => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      pan: '',
      fundId: fund.id
    });
    setIsFormOpen(true);
  };

  // Function to generate fund details
  const getFundDetails = (fund) => {
    const details = [
      { id: 1, label: "Fund Name", value: fund.name },
      { id: 2, label: "Category", value: fund.category },
      { id: 3, label: "Sub Category", value: fund.subCategory || "N/A" },
      { id: 4, label: "Returns", value: fund.returns },
      { id: 5, label: "AUM", value: fund.aum },
      { id: 6, label: "Risk", value: fund.risk },
      { id: 7, label: "Investors", value: fund.investors },
      { id: 8, label: "Provider", value: fund.provider || "HDFC" },
    ];

    if (fund.id <= 10) {
      details.push({ id: 9, label: "Minimum SIP", value: "₹ 500" });
      details.push({ id: 10, label: "Lock-in Period", value: "None" });
    } else if (fund.id <= 20) {
      details.push({ id: 9, label: "Minimum Investment", value: "₹ 5,000" });
      details.push({ id: 10, label: "Expense Ratio", value: "0.65%" });
    } else if (fund.category === "Debt") {
      details.push({ id: 9, label: "Credit Quality", value: "AA+ & Above" });
      details.push({ id: 10, label: "Average Maturity", value: "3.2 years" });
    } else {
      details.push({ id: 9, label: "Portfolio Turnover", value: "15%" });
      details.push({ id: 10, label: "Top 5 Holdings", value: "32% of portfolio" });
    }

    return details;
  };

  // Function to render risk indicator
  const renderRiskIndicator = (risk) => {
    let bgColor = "";
    if (risk === "Very High") bgColor = "bg-red-500";
    else if (risk === "High") bgColor = "bg-orange-500";
    else if (risk === "Moderate") bgColor = "bg-yellow-500";
    else if (risk === "Low to Moderate") bgColor = "bg-green-400";
    else if (risk === "Moderately High") bgColor = "bg-amber-500";
    else bgColor = "bg-green-500";
    
    return (
      <div className="flex items-center">
        <span className={`w-3 h-3 rounded-full mr-2 ${bgColor}`}></span>
        <span className="text-xs">{risk}</span>
      </div>
    );
  };

  // Memoized FundDetailsPopup component
  const FundDetailsPopup = useMemo(() => {
    return ({ selectedFund, isPopupOpen, setIsPopupOpen }) => {
      if (!selectedFund) return null;

      return (
        <div className="relative">
          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                  <h2 className="text-xl font-bold text-gray-800">
                    {selectedFund.name} - Detailed Information
                  </h2>
                  <button 
                    onClick={() => setIsPopupOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="overflow-y-auto p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {getFundDetails(selectedFund).map((item) => (
                      <div key={item.id} className="border-b pb-2">
                        <div className="text-sm font-medium text-gray-500">{item.label}</div>
                        <div className="font-medium text-gray-900">{item.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-bold text-gray-800 mb-2">Exit Load Details:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li className="text-sm">
                        <span className="font-medium">1.00% Exit Load</span> if units are redeemed/switched-out within 1 year from allotment
                      </li>
                      <li className="text-sm">
                        <span className="font-medium">No Exit Load</span> if redeemed after 1 year
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500 italic">
                    Mutual fund investments are subject to market risks. Please read the scheme 
                    related documents carefully before investing. Past performance is not indicative of future returns.
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 border-t">
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    };
  }, []);

  // Memoized DetailsFormPopup component
  const DetailsFormPopup = useMemo(() => {
    return ({ isFormOpen, setIsFormOpen, formData, setFormData, allFunds }) => {
      if (!isFormOpen) return null;
      
      const fund = allFunds.find(f => f.id === formData.fundId);
      
      const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! Your details have been submitted successfully. We will contact you shortly.');
        setIsFormOpen(false);
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                Request Details: {fund?.name || "Mutual Fund"}
              </h2>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleFormSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    key={`name-input-${formData.fundId}`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                    autoFocus
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    key={`phone-input-${formData.fundId}`}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    key={`email-input-${formData.fundId}`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Card Number
                  </label>
                  <input
                    key={`pan-input-${formData.fundId}`}
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleFormChange}
                    required
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    title="Enter valid PAN (e.g., ABCDE1234F)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
                    placeholder="Enter PAN number"
                  />
                </div>
              </div>
              
              {fund && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-800 mb-2">Fund Details:</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-600">Category:</div>
                    <div className="font-medium">{fund.category}</div>
                    
                    <div className="text-gray-600">Risk Level:</div>
                    <div className="font-medium">{fund.risk}</div>
                    
                    <div className="text-gray-600">Returns:</div>
                    <div className="font-medium">{fund.returns}</div>
                    
                    <div className="text-gray-600">AUM:</div>
                    <div className="font-medium">{fund.aum}</div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">HDFC Mutual Fund Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our diverse range of mutual funds designed to help you achieve your financial goals
          </p>
          <div className="flex justify-center mt-6">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search funds by name or category..."
                className="pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full shadow-sm"
              />
              <svg className="w-5 h-5 text-gray-500 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mb-8 bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">{allFunds.length}</div>
              <div className="text-gray-700">Total Funds</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-green-600">₹ 2.4 L Cr.</div>
              <div className="text-gray-700">Total AUM</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">6.2 M</div>
              <div className="text-gray-700">Total Investors</div>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-amber-600">8.2%</div>
              <div className="text-gray-700">Avg. Expense Ratio</div>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            All Funds
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Equity
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Hybrid
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Index
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            ETF
          </button>
          <select className="bg-white border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">
            <option>Sort by: Returns (High to Low)</option>
            <option>Sort by: AUM (High to Low)</option>
            <option>Sort by: Risk (Low to High)</option>
          </select>
        </div>
        
        {/* Fund Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentFunds.map((fund) => (
            <div 
              key={fund.id}
              className={`${fund.gradient} rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              <div className="p-5 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{fund.name}</h3>
                    <p className="text-white/90 text-sm mt-1">{fund.category}</p>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-xs">
                    {fund.id <= 6 ? "Direct Plan" : fund.id <= 12 ? "ETF" : "Index"}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-xs text-white/80">Returns</p>
                    <p className="font-semibold text-lg">{fund.returns}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-xs text-white/80">AUM</p>
                    <p className="font-semibold">{fund.aum}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-xs text-white/80">Risk Level</p>
                    <div className="font-semibold text-xs mt-1">
                      {renderRiskIndicator(fund.risk)}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-xs text-white/80">Investors</p>
                    <p className="font-semibold">{fund.investors}</p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <button 
                    onClick={() => handleDetailsClick(fund)}
                    className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition-colors font-medium"
                  >
                    Details
                  </button>
                  <button 
                    onClick={() => handleViewDetails(fund)}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    View
                  </button>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-3 text-center text-sm">
                <div className="flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center mr-2">
                    <span className="text-blue-600 font-bold text-sm">H</span>
                  </div>
                  <span className="font-medium">HDFC Mutual Fund</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {hasMoreFunds && (
          <div className="text-center mb-12">
            <button 
              onClick={loadMoreFunds}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center mx-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              View More Funds
            </button>
            <p className="text-gray-500 mt-2 text-sm">
              Showing {currentFunds.length} of {allFunds.length} funds
            </p>
          </div>
        )}
        
        {/* Footer */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Ready to Invest?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Start your investment journey with HDFC Mutual Funds. Our experts are ready to help you choose the best funds for your financial goals.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-medium">
              Consult an Advisor
            </button>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Mutual fund investments are subject to market risks. Please read the scheme related documents carefully before investing.</p>
          <p className="mt-1">Past performance is not indicative of future returns.</p>
        </div>
      </div>
      
      {/* Render the popups */}
      {isPopupOpen && (
        <FundDetailsPopup 
          selectedFund={selectedFund} 
          isPopupOpen={isPopupOpen} 
          setIsPopupOpen={setIsPopupOpen} 
        />
      )}
      
      {isFormOpen && (
        <DetailsFormPopup 
          isFormOpen={isFormOpen} 
          setIsFormOpen={setIsFormOpen}
          formData={formData}
          setFormData={setFormData}
          allFunds={allFunds}
        />
      )}
    </div>
  );
};

export default MutualFundGrid;