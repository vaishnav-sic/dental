// poster.js
import { useState, useRef, useEffect } from 'react';

const Poster = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  
  const images = [
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BF8zACbCL6/l5ryebmu_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BF8zACbCL6/j5dcckn8_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BF8zACbCL6/cip42933_expires_30_days.png",
    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BF8zACbCL6/fsswbqvz_expires_30_days.png"
  ];

  // Handle scroll to update active dot
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / images.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  // Scroll to specific image
  const scrollTo = (index) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / images.length;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white p-4 md:p-8">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6">
        <span className="text-black text-sm md:text-base mr-2">HOME</span>
        <img 
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/BF8zACbCL6/syoervwt_expires_30_days.png" 
          className="w-5 h-5 md:w-6 md:h-6" 
          alt="arrow"
        />
        <span className="text-gray-500 text-sm md:text-base ml-2">MEN</span>
      </div>

      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold mb-4">MEN</h1>
      <h2 className="text-gray-600 text-lg md:text-xl mb-6">Popular categories</h2>

      {/* Image Gallery */}
      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide"
        >
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 snap-start">
              <img 
                src={img} 
                className="w-full h-auto aspect-square object-cover rounded-lg"
                alt={`Category ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-black' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Poster;