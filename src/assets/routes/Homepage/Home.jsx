import React, { useState } from 'react';
import Rating from './Rating';
import Mutualfund from './Mutualfund';
import MarketUpdate from '../Homepage/MarketUpdate';
import Footer from './Footer';
import InsuranceDashboard from './InsuranceDashboard';
import Licsection from './LICPolicies';
import FinancialCalculator from './FinancialCalculator';
import CraouselVideos from './CraouselVideos';

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number (10 digits)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:3000/Homeform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! Your details have been submitted successfully.");
        setFormData({ name: '', phone: '' });
        setShowPopup(false); // Close popup on success
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Sorry, there was an error submitting your details. Please try again.");
    }
  };

  // Close popup without submitting
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      {/* Welcome Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-4 z-50 relative">
            {/* Close button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Welcome to Financial Explorer</h2>
              <p className="text-gray-600 mt-2">
                Please provide your details to access personalized financial insights
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter 10-digit phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-all"
              >
                Get Started
              </button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                We'll contact you with personalized financial recommendations
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className={showPopup ? 'blur-sm pointer-events-none' : ''}>
        <CraouselVideos/>
        <Mutualfund />

        <div className='h-26 bg-gray-100 p-6'>
          <MarketUpdate/>
        </div>
        
        <InsuranceDashboard />
        <FinancialCalculator/>
        <Licsection />
        <Rating />
        <Footer />
      </div>
    </div>
  );
};

export default Home;