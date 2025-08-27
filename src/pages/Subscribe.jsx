import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscribeCard = () => {
  const Navigate = useNavigate();

  const HandleSubscribe = () => {
    Navigate('/subscribe')
  }

  return (
    <div className="bg-white p-8 md:p-16 rounded-2xl shadow-xl max-w-4xl mx-auto my-8 md:my-16">
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
            Subscribe Now for<br className="hidden md:inline" /> Get Special Features!
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Let's subscribe with us and find the fun.
          </p>
        </div>

        <button onClick={HandleSubscribe} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscribeCard;