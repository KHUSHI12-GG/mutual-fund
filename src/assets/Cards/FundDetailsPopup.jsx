import React, { useState } from 'react';

const FundDetailsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Sample data structure - replace with your 72 details
  const fundDetails = [
    { id: 1, label: 'Fund House', value: 'HDFC Mutual Fund' },
    { id: 2, label: 'Scheme Name', value: 'Large Cap Fund' },
    { id: 3, label: 'Category', value: 'Equity' },
    { id: 4, label: 'Plan', value: 'DIRECT' },
    { id: 5, label: 'Plan Variant', value: 'REGULAR' },
    { id: 6, label: 'Scheme Type', value: 'Open Ended' },
    // ... add all 72 details here
    { id: 72, label: 'Unique Feature', value: 'Explicit focus on SEBI-defined large caps' }
  ];

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        View Details
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                HDFC Large Cap Fund - Details
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            
            {/* Content - Scrollable Grid */}
            <div className="overflow-y-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fundDetails.map((item) => (
                  <div key={item.id} className="border-b pb-2">
                    <div className="text-sm font-medium text-gray-500">{item.label}</div>
                    <div className="font-medium text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
              
              {/* Exit Load Details */}
              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Exit Load Details:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="text-sm">
                    <span className="font-medium">1.00% Exit Load</span> if units are redeemed/switched-out within 1 year from allotment
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">No Exit Load</span> if redeemed after 1 year
                  </li>
                  <li className="text-sm">
                    No load on bonus units and units allotted on dividend reinvestment
                  </li>
                </ul>
              </div>
              
              {/* Disclaimer */}
              <div className="mt-4 text-xs text-gray-500 italic">
                Mutual fund investments are subject to market risks. Please read the scheme 
                related documents carefully before investing.
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t">
              <button
                onClick={() => setIsOpen(false)}
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

export default FundDetailsPopup;