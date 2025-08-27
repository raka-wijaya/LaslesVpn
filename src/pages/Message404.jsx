import React from 'react';
import { CreditCard, AlertTriangle } from 'lucide-react';

const NotFoundMessage = () => {
  return (
    <div className="bg-gray-50 font-sans py-24 md:py-28 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white rounded-xl shadow-lg border border-red-300 p-8 md:p-12 max-w-2xl mx-auto flex flex-col items-center">
          <AlertTriangle className="h-20 w-20 text-red-500 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! It's Under Maintenance
          </h2>
          <p className="mt-4 text-lg text-gray-600 mb-8">
            We are currently performing system maintenance to improve the convenience and quality of our service.
            Please wait a moment, the website will be back up and running soon.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center">
            <CreditCard className="h-5 w-5 mr-2" />
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundMessage;
