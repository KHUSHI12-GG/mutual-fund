import React, { useState } from 'react';
import { Camera } from 'lucide-react'; // ya koi aur icon use karo
import PostForm from './PostForm';

const CameraUpload = ({ onPostSuccess }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">
      {/* Camera Icon Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 text-white"
      >
        <Camera size={24} />
      </button>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-xl text-gray-500"
            >
              &times;
            </button>

            <h2 className="text-lg font-semibold mb-4">Create a Post</h2>
            <PostForm onPostSuccess={() => {
              setShowModal(false);
              onPostSuccess();
            }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraUpload;
