import React from 'react';
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine, FaQuoteLeft } from 'react-icons/fa';
import Navbar from '../Homepage/Navbar';

const AboutUs = () => {
  return (
   
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-4 pb-1 px-4 sm:px-6 lg:px-8">
        
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About <span className="text-blue-600">Our Company</span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to creating solutions that transform businesses and empower people.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
            <div className="text-blue-500 mx-auto mb-3">
              <FaUsers className="text-4xl mx-auto img" />
            </div>
            <div className="text-3xl font-bold text-gray-900">150+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
            <div className="text-blue-500 mx-auto mb-3">
              <FaLightbulb className="text-4xl mx-auto" />
            </div>
            <div className="text-3xl font-bold text-gray-900">42</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
            <div className="text-blue-500 mx-auto mb-3">
              <FaHandshake className="text-4xl mx-auto" />
            </div>
            <div className="text-3xl font-bold text-gray-900">1000+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
            <div className="text-blue-500 mx-auto mb-3">
              <FaChartLine className="text-4xl mx-auto" />
            </div>
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Our Story */}
  {/* Our Story */}
<div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
  <div className="lg:w-1/2">
    <div className="relative">
      {/* Decorative blue box */}
      <div className="bg-blue-500 w-64 h-64 rounded-xl absolute -bottom-4 -left-4 -z-10"></div>

      {/* Actual image with border and proper sizing */}
      <div className="w-full h-96 rounded-xl overflow-hidden border-2 border-dashed bg-gray-100">
        <img 
          src="https://cdn.gobankingrates.com/wp-content/uploads/2015/04/how-to-save-money.jpg"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <div className="lg:w-1/2">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
    <p className="text-gray-600 mb-4">
      At GrowWealth, our journey began with a simple belief — every Indian deserves a chance to build wealth smartly and securely.
      
      In 2018, we saw that investing felt complicated and risky to many. People were either misinformed, confused by jargon, or afraid to take the first step. That's when our team of financial experts, techies, and dreamers came together to build a platform that simplifies mutual fund investing for everyone — whether you're a college student saving your first ₹500 or a working professional planning for retirement.
      <br /><br />
      We started with just 5 clients and a vision: 👉 To make investing transparent, affordable, and goal-oriented.
    
    
      Today, we’re proud to have helped over 1 lakh+ investors grow their wealth through trusted mutual fund options — handpicked and backed by data.
      
      We don’t believe in “one-size-fits-all” advice. Instead, we guide you with smart insights, risk profiling, and powerful tools so that you stay in control of your financial future.
     
      Because this isn’t just about money — it’s about dreams, families, and a secure tomorrow. And we’re honored to be part of your journey.
    </p>
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
      Learn More About Our Journey
    </button>
  </div>
</div>


        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We simplify investing through smart tech and fresh ideas — making mutual funds more accessible, transparent, and user-friendly for everyone.",
                icon: <FaLightbulb className="text-3xl" />
              },
              {
                title: "Integrity",
                description: "Trust is everything. We recommend only what’s right — no hidden agendas, just honest advice backed by data..",
                icon: <FaHandshake className="text-3xl" />
              },
              {
                title: "Excellence",
                description: "We aim for nothing less than the best — from fund selection to support, every step reflects quality and care.",
                icon: <FaChartLine className="text-3xl" />
              },
              {
                title: "Collaboration",
                description: "We grow together — working hand-in-hand with experts, partners, and investors to build lasting financial success..",
                icon: <FaUsers className="text-3xl" />
              },
              {
                title: "Customer Focus",
                description: "Your goals are our priority. We listen, understand, and tailor solutions that truly meet your needs — because your success is our success.",
                icon: <FaUsers className="text-3xl" />
              },
              {
                title: "Sustainability",
                description: "We create solutions that benefit both business and the environment for generations to come.",
                icon: <FaChartLine className="text-3xl" />
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Alex Johnson", 
                role: "CEO & Founder", 
                bio: "Visionary leader with 15+ years in tech innovation" 
              },
              { 
                name: "Sarah Williams", 
                role: "Chief Technology Officer", 
                bio: "Tech expert specializing in AI and machine learning" 
              },
              { 
                name: "Michael Chen", 
                role: "Chief Operations Officer", 
                bio: "Operations guru with a focus on efficiency and growth" 
              },
              { 
                name: "Emily Rodriguez", 
                role: "Chief Marketing Officer", 
                bio: "Creative strategist building global brand presence" 
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform"
              >
                <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <div className="text-blue-500 font-medium mb-2">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="flex mt-4 space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-10 text-white mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <FaQuoteLeft className="text-4xl mx-auto mb-6 text-blue-200" />
            <p className="text-xl md:text-2xl italic mb-8">
              "Working with this team has transformed our business. Their innovative approach and dedication to excellence have helped us achieve results we never thought possible. Truly a partnership built on trust and expertise."
            </p>
            <div className="font-bold text-lg">Jennifer Thompson</div>
            <div className="text-blue-200">CEO, TechInnovate Inc.</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us on Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're looking for innovative solutions or want to join our team of experts, we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              View Careers
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutUs;