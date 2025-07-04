import React, { useState, useEffect } from 'react';
import { 
  FiShield, 
  FiDollarSign, 
  FiTrendingUp, 
  FiUserCheck, 
  FiClock, 
  FiCheckCircle 
} from 'react-icons/fi';


const InsuranceDashboard = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');
  
  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeCategory, sortBy]);
  
  // Insurance categories
  const categories = [
    { id: 'all', name: 'All Policies' },
    { id: 'life', name: 'Life Insurance' },
    { id: 'health', name: 'Health Insurance' },
    { id: 'home', name: 'Home Insurance' },
    { id: 'auto', name: 'Auto Insurance' },
    { id: 'travel', name: 'Travel Insurance' },
  ];
  
  // Insurance products data
  const insuranceProducts = [
    {
      id: 1,
      name: "LifeSecure Pro",
      category: "life",
      company: "Global Life Insurers",
      premium: 2500,
      coverage: 5000000,
      rating: 4.8,
      features: ["Term Life", "Critical Illness", "Accidental Death", "Tax Benefits"],
      popularity: 95,
      claimRatio: 98.2,
      description: "Comprehensive life coverage with flexible terms and premium options."
    },
    {
      id: 2,
      name: "HealthGuard Platinum",
      category: "health",
      company: "MediCare Solutions",
      premium: 1800,
      coverage: 1000000,
      rating: 4.7,
      features: ["Full Health Checkup", "Pre-existing Coverage", "Cashless Hospitals", "Maternity Cover"],
      popularity: 92,
      claimRatio: 96.5,
      description: "Complete health protection with extensive network hospitals."
    },
    {
      id: 3,
      name: "HomeShield Elite",
      category: "home",
      company: "SecureHome Insurers",
      premium: 3200,
      coverage: 15000000,
      rating: 4.6,
      features: ["Natural Disasters", "Theft Protection", "Fire Damage", "Electronic Equipment"],
      popularity: 88,
      claimRatio: 94.3,
      description: "Complete protection for your home and belongings against all risks."
    },
    {
      id: 4,
      name: "AutoSafe Premium",
      category: "auto",
      company: "DriveSure Insurance",
      premium: 4200,
      coverage: 3000000,
      rating: 4.5,
      features: ["Comprehensive Cover", "Zero Depreciation", "Roadside Assistance", "Engine Protection"],
      popularity: 90,
      claimRatio: 97.1,
      description: "Complete car protection with fast claim settlement."
    },
    {
      id: 5,
      name: "TravelEase Global",
      category: "travel",
      company: "WorldCover Insurers",
      premium: 1200,
      coverage: 500000,
      rating: 4.4,
      features: ["Trip Cancellation", "Medical Emergency", "Lost Luggage", "Flight Delay"],
      popularity: 85,
      claimRatio: 95.7,
      description: "International travel protection for worry-free journeys."
    },
    {
      id: 6,
      name: "WealthLife Plus",
      category: "life",
      company: "Fortune Financial",
      premium: 3800,
      coverage: 7500000,
      rating: 4.9,
      features: ["Life Coverage", "Wealth Creation", "Tax Savings", "Flexible Payouts"],
      popularity: 96,
      claimRatio: 98.9,
      description: "Combines life protection with long-term wealth creation."
    },
  ];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? insuranceProducts 
    : insuranceProducts.filter(product => product.category === activeCategory);
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Insurance Portfolio Management
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure your future with our comprehensive range of insurance products tailored to your needs
          </p>
        </div>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <FiShield className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Active Policies</p>
              <p className="font-bold text-lg">18</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <FiDollarSign className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Annual Premium</p>
              <p className="font-bold text-lg">₹84,500</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg mr-4">
              <FiTrendingUp className="text-purple-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Coverage Value</p>
              <p className="font-bold text-lg">₹3.8 Cr</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
            <div className="bg-teal-100 p-3 rounded-lg mr-4">
              <FiUserCheck className="text-teal-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Claims Settled</p>
              <p className="font-bold text-lg">98.2%</p>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span>{category.name}</span>
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
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {/* Products Grid */}
        {!isLoading && viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.company}</p>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      {categories.find(cat => cat.id === product.category)?.icon}
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
                      <p className="text-gray-500 text-sm">Claim Ratio</p>
                      <p className="font-semibold text-green-600">{product.claimRatio}%</p>
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
                        <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
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
                    <button className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Get Quote
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
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claim Ratio</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="bg-gray-100 p-2 rounded-lg mr-4">
                          {categories.find(cat => cat.id === product.category)?.icon}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-gray-500 text-sm">{product.company}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium">{formatCurrency(product.premium)}</td>
                    <td className="py-4 px-6 font-medium">{formatCurrency(product.coverage)}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {renderStars(product.rating)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
                          <div 
                            className="bg-green-600 h-1.5 rounded-full" 
                            style={{ width: `${product.claimRatio}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-green-600">{product.claimRatio}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button className="bg-blue-600 text-white py-1.5 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          Quote
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
        
        {/* Additional Resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6">
            <div className="flex items-center mb-4">
              <FiClock className="text-xl mr-3" />
              <h3 className="text-lg font-bold">Quick Claim Settlement</h3>
            </div>
            <p className="mb-4">Our streamlined process ensures your claims are processed within 72 hours for most policies.</p>
            <button className="bg-white text-blue-700 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              File a Claim
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-green-800 text-white rounded-xl p-6">
            <div className="flex items-center mb-4">
              <FiCheckCircle className="text-xl mr-3" />
              <h3 className="text-lg font-bold">Policy Renewal</h3>
            </div>
            <p className="mb-4">Renew your policies seamlessly with our automatic renewal options and exclusive discounts.</p>
            <button className="bg-white text-green-700 py-2 px-4 rounded-lg font-medium hover:bg-green-50 transition-colors">
              Renew Policy
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-xl p-6">
            <div className="flex items-center mb-4">
              <FiUserCheck className="text-xl mr-3" />
              <h3 className="text-lg font-bold">Expert Consultation</h3>
            </div>
            <p className="mb-4">Schedule a free consultation with our insurance experts to optimize your coverage.</p>
            <button className="bg-white text-purple-700 py-2 px-4 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDashboard;