import React from 'react';
import { Shield, Gauge, Globe, Wifi, Key, HardDrive, Zap, Star } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const Navigate = useNavigate()

  const HandleReady = () => {
    Navigate('/ready')
  }
  return (
    <div className="bg-gray-50 font-sans">
      <section className="container mx-auto px-4 py-24 md:py-28">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full md:max-w-3xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Powerful Features for a Safer Online Experience
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              LaslesVPN is packed with features designed to give you complete control over your online security and privacy. Browse with confidence, speed, and unlimited access.
            </p>
            {/* <button className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Started Now
            </button> */}
          </div>
        </div>
      </section>


      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Core Features of LaslesVPN
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto mb-12">
            We focus on the essentials to give you the best possible VPN experience.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">

            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-md w-full md:w-1/3">
              <Shield className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Unbreakable Security</h3>
              <p className="text-gray-600 text-sm">Our military-grade encryption ensures your data is safe from prying eyes on any network.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-md w-full md:w-1/3">
              <Gauge className="h-12 w-12 text-red-500 mb-4" /> {/* Changed to Gauge */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Blazing-Fast Speeds</h3>
              <p className="text-gray-600 text-sm">With our optimized servers, you can stream, download, and game without any lag or buffering.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-md w-full md:w-1/3">
              <Globe className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Network</h3>
              <p className="text-gray-600 text-sm">Access geo-restricted content and bypass censorship with our vast network of servers in over 50 countries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Advanced Features
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto mb-12">
            Go beyond the basics with our specialized tools.
          </p>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12">

            <div className="flex items-center p-4 bg-white rounded-xl shadow-md w-full md:w-1/3 lg:w-1/4">
              <Wifi className="h-8 w-8 text-red-500 mr-4" />
              <p className="text-gray-800 font-semibold">Automatic Kill Switch</p>
            </div>

            <div className="flex items-center p-4 bg-white rounded-xl shadow-md w-full md:w-1/3 lg:w-1/4">
              <Key className="h-8 w-8 text-red-500 mr-4" />
              <p className="text-gray-800 font-semibold">DNS Leak Protection</p>
            </div>

            <div className="flex items-center p-4 bg-white rounded-xl shadow-md w-full md:w-1/3 lg:w-1/4">
              <HardDrive className="h-8 w-8 text-red-500 mr-4" />
              <p className="text-gray-800 font-semibold">Unlimited Bandwidth</p>
            </div>
            <div className="flex items-center p-4 bg-white rounded-xl shadow-md w-full md:w-1/3 lg:w-1/4">
              <Zap className="h-8 w-8 text-red-500 mr-4" />
              <p className="text-gray-800 font-semibold">Dedicated Streaming Servers</p>
            </div>

            <div className="flex items-center p-4 bg-white rounded-xl shadow-md w-full md:w-1/3 lg:w-1/4">
              <Star className="h-8 w-8 text-red-500 mr-4" />
              <p className="text-gray-800 font-semibold">24/7 Customer Support</p>
            </div>

            <div className="flex items-center p-4 bg-white rounded-xl shadow-md w-full md:w-1/3 lg:w-1/4">
              <Shield className="h-8 w-8 text-red-500 mr-4" />
              <p className="text-gray-800 font-semibold">No-Logs Policy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-red-500 text-white p-8 md:p-12 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="mt-2 text-lg opacity-90">
            Discover a new level of freedom and security with LaslesVPN.
          </p>
          <button onClick={HandleReady} className="mt-6 bg-white text-red-500 font-bold py-3 px-8 rounded-lg transition-colors hover:bg-gray-100">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;
