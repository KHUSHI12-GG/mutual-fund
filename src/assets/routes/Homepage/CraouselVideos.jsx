import React, { useState, useRef } from 'react';

const CraouselVideos = () => {
  const videos = [
    {
      src: "/Image/video.mp4",
    },
    {
      src: "/Image/video2.mp4",
    },
    {
      src: "/Image/video3.mp4",
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoEnd = () => {
    goToNext();
  };

  if (!videos || videos.length === 0) {
    return <div className="text-center text-gray-500">No videos available</div>;
  }

  return (
    <div className="w-full relative">
      {/* Main Video Player */}
      <div className="w-full h-[50vh]">
        <video
          ref={(el) => (videoRefs.current[currentIndex] = el)}
          key={videos[currentIndex].src}
          className="w-full h-full object-contain"
          autoPlay
          muted={isMuted}
          onEnded={handleVideoEnd}
        >
          <source src={videos[currentIndex].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full z-10"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default CraouselVideos;