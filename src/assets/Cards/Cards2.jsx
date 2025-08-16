import React, { useState } from 'react';

const Cards2 = () => {
  const allFunds = [
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
  ];

  const [visibleFunds, setVisibleFunds] = useState(4);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pan: '',
    fundId: null
  });

  const fundsPerPage = 4;
  const currentFunds = allFunds.slice(0, visibleFunds);
  const hasMoreFunds = visibleFunds < allFunds.length;

  const loadMoreFunds = () => setVisibleFunds(prev => prev + fundsPerPage);

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

  const renderRiskIndicator = (risk) => {
    let bgColor = "bg-gray-300";
    let textColor = "text-gray-800";
    
    if (risk === "Very High") {
      bgColor = "bg-red-100";
      textColor = "text-red-800";
    } else if (risk === "High") {
      bgColor = "bg-orange-100";
      textColor = "text-orange-800";
    } else if (risk === "Moderate") {
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
    } else if (risk === "Low to Moderate") {
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
    } else if (risk === "Moderately High") {
      bgColor = "bg-amber-100";
      textColor = "text-amber-800";
    } else {
      bgColor = "bg-green-100";
      textColor = "text-green-800";
    }

    return (
      <span className={`text-xs px-2 py-1 rounded-full ${bgColor} ${textColor}`}>
        {risk}
      </span>
    );
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/Formroutes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        alert("Thank you! Your details have been submitted successfully.");
        setIsFormOpen(false);
        setFormData({ name: '', phone: '', email: '', pan: '', fundId: null });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Sorry, there was an error submitting your details. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">HDFC Mutual Fund Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our diverse range of mutual funds designed to help you achieve your financial goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentFunds.map((fund) => (
            <div key={fund.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className={`${fund.gradient} p-5 text-white`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{fund.name}</h3>
                    <p className="text-white/90 text-sm mt-1">{fund.category}</p>
                  </div>
                  <div className="bg-white/20 rounded-lg w-10 h-10 flex items-center justify-center">
                    <span className="text-white font-bold">H</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Returns (p.a.)</span>
                    <span className="font-semibold text-indigo-600">{fund.returns}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Assets</span>
                    <span className="font-medium text-gray-700">{fund.aum}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Risk Level</span>
                    {renderRiskIndicator(fund.risk)}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Investors</span>
                    <span className="font-medium text-gray-700">{fund.investors}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDetailsClick(fund)}
                  className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                  More info & Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {hasMoreFunds && (
          <div className="text-center">
            <button
              onClick={loadMoreFunds}
              className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors text-sm font-medium"
            >
              View More Funds
            </button>
          </div>
        )}
      </div>

      {isFormOpen && (() => {
        const fund = allFunds.find(f => f.id === formData.fundId);

        const handleFormChange = (e) => {
          const { name, value } = e.target;
          setFormData(prev => ({ ...prev, [name]: value }));
        };

        return (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
              <div className={`${fund?.gradient || 'bg-indigo-600'} p-5 text-white`}>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    Invest in {fund?.name || "Mutual Fund"}
                  </h2>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="text-white hover:text-gray-200 text-2xl"
                  >
                    &times;
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleFormChange}
                      required
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      title="Enter valid PAN (e.g., ABCDE1234F)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 uppercase"
                      placeholder="ABCDE1234F"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

export default Cards2;