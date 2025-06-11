import React from "react";
import { Home, Search, ArrowLeft, ShoppingBag } from "lucide-react";

function NoPageFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
        {/* 404 Visual */}
        <div className="mb-8 animate-bounce-in">
          <div className="text-8xl md:text-9xl font-bold text-green-500 mb-4 animate-pulse">
            404
          </div>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full animate-expand"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12 animate-slide-in-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-300 mb-2">
            The page you're looking for seems to have disappeared into the
            digital void.
          </p>
          <p className="text-gray-400">
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right">
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </button>

          <button
            onClick={() => (window.location.href = "/products")}
            className="flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 hover:scale-105 transition-all duration-300 hover:shadow-lg"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Shop Now</span>
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 animate-fade-in hover:border-green-500/30 transition-colors duration-300">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-green-500 mr-2 animate-spin-slow" />
            <h3 className="text-xl font-semibold text-white">
              Looking for something specific?
            </h3>
          </div>
          <p className="text-gray-300 mb-4">
            Try searching for our premium mobile accessories or browse our
            popular categories.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 hover:text-green-400 hover:scale-105 cursor-pointer transition-all duration-300">
              Phone Cases
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 hover:text-green-400 hover:scale-105 cursor-pointer transition-all duration-300">
              Silicone Cases
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 hover:text-green-400 hover:scale-105 cursor-pointer transition-all duration-300">
              3D Designs
            </span>
            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 hover:text-green-400 hover:scale-105 cursor-pointer transition-all duration-300">
              Premium Accessories
            </span>
          </div>
        </div>

        {/* Brand Message */}
        <div className="mt-12 text-center animate-fade-in-delayed">
          <p className="text-gray-400 text-sm">
            <span className="text-green-500 font-semibold">Darkft</span> -
            Elevating your device experience
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out 0.2s both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out 0.4s both;
        }

        .animate-expand {
          animation: expand 0.8s ease-out 0.5s both;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.6s both;
        }

        .animate-fade-in-delayed {
          animation: fade-in 0.8s ease-out 1s both;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default NoPageFound;
