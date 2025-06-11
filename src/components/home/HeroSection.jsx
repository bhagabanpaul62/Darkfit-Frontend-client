import React, { useState, useEffect } from "react";
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample images - replace with your actual images
  const carouselImages = [
    img1,img2,img3,img4
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/2 left-1/2 w-1.5 h-1.5 bg-green-300 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Headline */}
          <h1
            className={`
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-bold leading-tight mb-4 sm:mb-6 
              bg-gradient-to-r from-white via-gray-100 to-gray-300 
              bg-clip-text text-transparent
              transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            Elevate Your Device
          </h1>

          {/* Subtext */}
          <p
            className={`
              text-sm sm:text-base md:text-lg lg:text-xl 
              text-gray-300 mb-6 sm:mb-8 lg:mb-10 
              max-w-xl mx-auto lg:mx-0 leading-relaxed
              transition-all duration-1000 ease-out delay-200
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            Premium mobile accessories designed to match your lifestyle and
            elevate your everyday experience.
          </p>

          {/* CTA Button */}
          <div
            className={`
              transition-all duration-1000 ease-out delay-400
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <button
              className="
              group relative overflow-hidden
              bg-[#80d66b] hover:bg-[#72c25f] 
              text-black font-bold text-base sm:text-lg 
              px-8 sm:px-10 py-3.5 sm:py-4 
              rounded-xl sm:rounded-2xl
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25
              active:scale-95
              focus:outline-none focus:ring-4 focus:ring-green-400/30
            "
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Shop Now
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>

              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#72c25f] to-[#80d66b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl"></div>
            </button>
          </div>

          {/* Additional accent */}
          <div
            className={`
              mt-12 sm:mt-16 lg:mt-20 
              transition-all duration-1000 ease-out delay-600
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-green-500"></div>
              <span>Trusted by 50,000+ customers</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-green-500"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Carousel Banner */}
        <div
          className={`
            relative order-1 lg:order-2 h-[300px] sm:h-[400px] lg:h-[600px]
            transition-all duration-1200 ease-out delay-300
            ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-8 scale-95"
            }
          `}
        >
          {/* Main Carousel Container */}
          <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden group">
            {/* Carousel Images */}
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`
                    absolute inset-0 transition-all duration-700 ease-in-out
                    ${
                      index === currentImageIndex
                        ? "opacity-100 translate-x-0"
                        : index < currentImageIndex
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`Premium Device ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${
                      index === currentImageIndex
                        ? "bg-green-400 scale-125"
                        : "bg-white/50 hover:bg-white/70"
                    }
                  `}
                />
              ))}
            </div>

            {/* Floating accent elements */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-green-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute bottom-16 left-6 w-3 h-3 bg-green-300 rounded-full opacity-60 animate-pulse delay-700"></div>
          </div>

          {/* Background decoration */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-green-500/20 rounded-2xl lg:rounded-3xl -z-10 transition-all duration-500 group-hover:border-green-500/40"></div>
        </div>
      </div>

      {/* Curved Bottom Section */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 
          h-[30vh] sm:h-[35vh] lg:h-[40vh] 
          bg-gradient-to-t from-green-900/20 to-green-400/10
          transition-all duration-1500 ease-out delay-500
          ${
            isVisible
              ? "opacity-100 translate-y-0 rounded-tl-[60%] rounded-tr-[60%] sm:rounded-tl-[70%] sm:rounded-tr-[70%] lg:rounded-tl-[80%] lg:rounded-tr-[80%]"
              : "opacity-0 translate-y-full rounded-tl-[40%] rounded-tr-[40%]"
          }
        `}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-tl-[inherit] rounded-tr-[inherit]"></div>

        {/* Floating elements */}
        <div className="absolute top-8 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-16 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-12 left-1/2 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}

export default HeroSection;
