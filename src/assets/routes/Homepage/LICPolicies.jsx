import React, { useState, useEffect } from 'react';

const LICPolicies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    policy: '',
    message: ''
  });

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [sortBy]);
  
  // Comprehensive list of LIC insurance products
  const licProducts = [
    {
      id: 1,
      name: "LIC Jeevan Anand",
      category: "life",
      premium: 25000,
      coverage: 15000000,
      rating: 4.8,
      features: ["Life Cover till age 100", "Maturity Benefit", "Death Benefit", "Bonus Facility"],
      popularity: 95,
      claimRatio: 98.7,
      description: "Participating whole life plan offering financial security for family in case of unfortunate death.",
      policyTerm: "15-35 years",
      minAge: 18,
      maxAge: 50
    },
    {
      id: 2,
      name: "LIC New Tech Term",
      category: "life",
      premium: 5000,
      coverage: 10000000,
      rating: 4.6,
      features: ["Pure Protection Plan", "High Coverage", "Affordable Premium", "Tax Benefits"],
      popularity: 92,
      claimRatio: 99.1,
      description: "Term insurance plan providing life cover at affordable premium rates.",
      policyTerm: "10-40 years",
      minAge: 18,
      maxAge: 65
    },
    {
      id: 3,
      name: "LIC Bima Jyoti",
      category: "life",
      premium: 35000,
      coverage: 20000000,
      rating: 4.7,
      features: ["Guanteed Additions", "Maturity Benefit", "Death Benefit", "Premium Waiver"],
      popularity: 90,
      claimRatio: 98.9,
      description: "Non-linked, participating plan that offers financial protection with guaranteed benefits.",
      policyTerm: "15-20 years",
      minAge: 90,
      maxAge: 60
    },
    {
      id: 4,
      name: "LIC SIIP",
      category: "investment",
      premium: 30000,
      coverage: 10000000,
      rating: 4.5,
      features: ["Market Linked Returns", "Life Cover", "Flexible Premium Payment", "Fund Switching"],
      popularity: 88,
      claimRatio: 97.5,
      description: "Unit Linked Insurance Plan that provides investment opportunities along with life cover.",
      policyTerm: "10-25 years",
      minAge: 18,
      maxAge: 50
    },
    {
      id: 5,
      name: "LIC Jeevan Umang",
      category: "life",
      premium: 40000,
      coverage: 25000000,
      rating: 4.9,
      features: ["Annual Survival Benefit", "Maturity Benefit", "Death Benefit", "Premium Waiver"],
      popularity: 96,
      claimRatio: 99.0,
      description: "Participating whole life plan providing annual income after premium payment term.",
      policyTerm: "25 years",
      minAge: 90,
      maxAge: 55
    },
    {
      id: 6,
      name: "LIC Cancer Cover",
      category: "health",
      premium: 2000,
      coverage: 5000000,
      rating: 4.4,
      features: ["Cancer Specific Cover", "Stages Covered", "Lump Sum Payout", "Tax Benefits"],
      popularity: 85,
      claimRatio: 97.8,
      description: "Special health insurance plan providing coverage against cancer diagnosis.",
      policyTerm: "10-30 years",
      minAge: 20,
      maxAge: 65
    },
    {
      id: 7,
      name: "LIC New Children's Money Back",
      category: "child",
      premium: 30000,
      coverage: 10000000,
      rating: 4.7,
      features: ["Survival Benefits", "Maturity Benefit", "Death Benefit", "Education Fund"],
      popularity: 89,
      claimRatio: 98.5,
      description: "Money back plan specifically designed to meet educational and other needs of children.",
      policyTerm: "25 years",
      minAge: 0,
      maxAge: 12
    },
    {
      id: 8,
      name: "LIC Jeevan Labh",
      category: "savings",
      premium: 20000,
      coverage: 5000000,
      rating: 4.6,
      features: ["Limited Premium Payment", "Guaranteed Maturity", "Death Benefit", "Bonus Facility"],
      popularity: 91,
      claimRatio: 98.8,
      description: "Limited premium paying, non-linked, with-profits endowment plan.",
      policyTerm: "16-25 years",
      minAge: 18,
      maxAge: 59
    }
  ];
  
  // Sort products
  const sortedProducts = [...licProducts].sort((a, b) => {
    if (sortBy === 'premium') return a.premium - b.premium;
    if (sortBy === 'coverage') return b.coverage - a.coverage;
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.popularity - a.popularity;
  });

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
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };
  
  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Handle opening contact form
  const openContactForm = (product) => {
    setSelectedProduct(product);
    setFormData({
      ...formData,
      policy: product.name
    });
    setShowContactForm(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! A LIC representative will contact you shortly.');
    setShowContactForm(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      policy: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-4 z-50 relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Contact LIC Agent</h2>
              <p className="text-gray-600 mt-2">
                Interested in {selectedProduct?.name}
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Policy Interested In
                  </label>
                  <input
                    type="text"
                    name="policy"
                    value={formData.policy}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-600 rounded-lg p-3 mr-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                LIC Insurance Policies
              </h1>
              <p className="text-gray-600">
                Trusted life insurance solutions for every Indian family
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl p-4 max-w-3xl mx-auto">
            <p className="text-lg">
              Life Insurance Corporation of India - Serving the nation since 1956
            </p>
          </div>
        </div>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-red-100 p-3 rounded-lg mr-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Policy Types</p>
              <p className="font-bold text-lg">20+</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Active Customers</p>
              <p className="font-bold text-lg">290M+</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Claim Settlement Ratio</p>
              <p className="font-bold text-lg">98.76%</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Insurance Agents</p>
              <p className="font-bold text-lg">1.3M+</p>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          {/* LIC Specific Categories */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', name: 'All Policies' },
              { id: 'life', name: 'Life Insurance' },
              { id: 'health', name: 'Health Plans' },
              { id: 'investment', name: 'Investment Plans' },
              { id: 'child', name: 'Child Plans' },
              { id: 'savings', name: 'Savings Plans' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => {}}
                className={`px-4 py-2 rounded-full transition-all bg-white text-gray-700 hover:bg-gray-100`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* View Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white rounded-lg p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            <div className="bg-white rounded-lg px-3 py-2">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm focus:outline-none"
              >
                <option value="popularity">Popularity</option>
                <option value="rating">Highest Rating</option>
                <option value="premium">Premium: Low to High</option>
                <option value="coverage">Coverage: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
          </div>
        )}
        
        {/* Products Grid */}
        {!isLoading && viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-200">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                          LIC Exclusive
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-500 text-sm">Annual Premium</p>
                      <p className="font-semibold">{formatCurrency(product.premium)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Coverage Amount</p>
                      <p className="font-semibold">{formatCurrency(product.coverage)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Policy Term</p>
                      <p className="font-semibold">{product.policyTerm}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Customer Rating</p>
                      {renderStars(product.rating)}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm mb-2">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openContactForm(product)}
                      className="flex-1 bg-red-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                      Contact us
                    </button>
                    <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2.5 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Products List */}
        {!isLoading && viewMode === 'list' && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coverage</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-red-600 text-sm">Life Insurance Corporation</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium">{formatCurrency(product.premium)}</td>
                    <td className="py-4 px-6 font-medium">{formatCurrency(product.coverage)}</td>
                    <td className="py-4 px-6">{product.policyTerm}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => openContactForm(product)}
                          className="bg-red-600 text-white py-1.5 px-3 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                        >
                          Contact us
                        </button>
                        <button className="bg-white border border-gray-300 text-gray-700 py-1.5 px-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Why Choose LIC?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5 mr-3 mt-1" />
                <span>Government-owned and trusted by millions</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5 mr-3 mt-1" />
                <span>Highest claim settlement ratio in the industry</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5 mr-3 mt-1" />
                <span>Pan-India presence with 2,048 branches</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5 mr-3 mt-1" />
                <span>Over 1.3 million agents for personalized service</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5 mr-3 mt-1" />
                <span>Tax benefits under Section 80C and 10(10D)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">LIC Claim Process</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Intimate Claim</h4>
                  <p className="text-gray-600 text-sm">Inform LIC through branch, agent or customer portal</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Submit Documents</h4>
                  <p className="text-gray-600 text-sm">Submit required documents at nearest branch</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Verification</h4>
                  <p className="text-gray-600 text-sm">LIC verifies documents and processes claim</p>
                </div>
              </div>
              <div className="flex">
                <div className="bg-red-100 text-red-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Settlement</h4>
                  <p className="text-gray-600 text-sm">Claim amount transferred to beneficiary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">LIC Customer Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-4" />
              <div>
                <p className="text-gray-500 text-sm">Toll-Free Number</p>
                <p className="font-bold">1800 123 4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-4" />
              <div>
                <p className="text-gray-500 text-sm">Email Support</p>
                <p className="font-bold">care@licindia.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-4" />
              <div>
                <p className="text-gray-500 text-sm">Branch Locator</p>
                <p className="font-bold">2,048+ Branches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LICPolicies;