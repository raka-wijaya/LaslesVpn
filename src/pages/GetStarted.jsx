import React from 'react';
import { ShieldCheck, FastForward, Globe } from 'lucide-react';
import Image from '../assets/Hero/Illustration 1.svg'
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const Navigate = useNavigate()

  const HandleChoose = () => {
    Navigate('/pricing')
  }
  return (
    <div className="bg-gray-50 font-sans">
      <section className="container mx-auto px-4 py-24 md:py-28">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Let's Get Started with <span className="text-red-500">LaslesVPN</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              LaslesVPN is the ultimate solution for online privacy, security, and freedom. Protect your data, access global content, and enjoy fast, unlimited connections.
            </p>
            <button onClick={HandleChoose} className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Choose Your Package.
            </button>
          </div>
          <div className="md:w-1/2 flex justify-end">
            {/* You might want to add an image or illustration here for the hero section */}
            <img src={Image} alt="" className='w-full h-auto max-w-md mx-auto md:max-w-none rounded-lg shadow-lg hidden sm:flex'/>
          </div>
        </div>
      </section>


      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best VPN service with features that will make your online experience safer and more enjoyable.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
            <div className="p-6 rounded-xl shadow-lg border-t-4 border-red-500 hover:shadow-2xl transition-shadow duration-300 w-full md:w-1/3">
              <div className="mx-auto h-16 w-16 mb-4 flex items-center justify-center bg-red-100 rounded-full">
                <ShieldCheck className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Unparalleled Security
              </h3>
              <p className="mt-2 text-gray-500 text-sm">
                Protect your personal data with advanced encryption and a no-logs policy.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg border-t-4 border-red-500 hover:shadow-2xl transition-shadow duration-300 w-full md:w-1/3">
              <div className="mx-auto h-16 w-16 mb-4 flex items-center justify-center bg-red-100 rounded-full">
                <FastForward className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Super Fast Connection
              </h3>
              <p className="mt-2 text-gray-500 text-sm">
                Stream and download without buffering. Enjoy a smooth and fast connection anywhere.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg border-t-4 border-red-500 hover:shadow-2xl transition-shadow duration-300 w-full md:w-1/3">
              <div className="mx-auto h-16 w-16 mb-4 flex items-center justify-center bg-red-100 rounded-full">
                <Globe className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Global Content Access
              </h3>
              <p className="mt-2 text-gray-500 text-sm">
                Unblock websites and streaming platforms from around the world with our extensive servers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Three Easy Steps to Get Started
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We make it incredibly simple. You can be connected and protected in minutes.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <span className="w-16 h-16 flex items-center justify-center bg-red-100 text-red-500 font-bold text-3xl rounded-full mb-4">
              1
            </span>
            <h4 className="text-xl font-semibold text-gray-800">
              Select Package
            </h4>
            <p className="mt-2 text-gray-500">
              Choose the subscription package that best suits your needs.
            </p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3">
            <span className="w-16 h-16 flex items-center justify-center bg-red-100 text-red-500 font-bold text-3xl rounded-full mb-4">
              2
            </span>
            <h4 className="text-xl font-semibold text-gray-800">
              Download the App
            </h4>
            <p className="mt-2 text-gray-500">
              Download our app for your preferred device (Windows, iOS, Android, macOS).
            </p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3">
            <span className="w-16 h-16 flex items-center justify-center bg-red-100 text-red-500 font-bold text-3xl rounded-full mb-4">
              3
            </span>
            <h4 className="text-xl font-semibold text-gray-800">
              Connect
            </h4>
            <p className="mt-2 text-gray-500">
              Log in, select a server, and click "Connect." You're ready to go!
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-red-500 text-white p-8 md:p-12 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Subscribe Now for Get Special Features!
          </h2>
          <p className="mt-2 text-lg opacity-90">
            Let's subscribe with us and find the fun.
          </p>
          <button className="mt-6 bg-white text-red-500 font-bold py-3 px-8 rounded-lg transition-colors hover:bg-gray-100">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
