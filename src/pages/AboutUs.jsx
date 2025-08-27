import React from 'react';
import { Lightbulb, Shield, EyeOff, Zap, Handshake, Gem, Users, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const Navigate = useNavigate()

    const HandleExplore = () => {
        Navigate('/features')
    }

    const HandleJoin = () => {
        Navigate('/join')
    }
  return (
    <div className="bg-gray-50 font-sans">
      <section className="container mx-auto px-4 py-24 md:py-28">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-full md:max-w-3xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
             Your Gateway to Secure and Private Internet
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              LaslesVPN is dedicated to providing robust online security, privacy, and unrestricted internet access worldwide. We believe in a digital world where everyone can browse safely and freely, without compromise.
            </p>
            <button onClick={HandleExplore} className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Explore Our Features
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Mission: Empowering Digital Freedom
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto mb-12">
            Our mission is to empower individuals and businesses with the tools to navigate the internet securely and privately. We strive to be the most trusted VPN service by offering top-tier encryption, lightning-fast speeds, and a strict no-logs policy, all while maintaining unparalleled accessibility.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-md w-full md:w-1/4">
              <Shield className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Robust Security</h3>
              <p className="text-gray-600 text-sm">Protecting your data with military-grade encryption.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-md w-full md:w-1/4">
              <EyeOff className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Absolute Privacy</h3>
              <p className="text-gray-600 text-sm">A strict no-logs policy means your online activities are yours alone.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-md w-full md:w-1/4">
              <Zap className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Blazing Fast Speed</h3>
              <p className="text-gray-600 text-sm">Enjoy seamless streaming and browsing without any slowdowns.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-md w-full md:w-1/4">
              <Globe className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Access</h3>
              <p className="text-gray-600 text-sm">Access content from anywhere in the world with ease.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Values That Drive Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto mb-12">
            At LaslesVPN, our operations are guided by core principles that prioritize our users' needs and digital rights, ensuring a trustworthy and reliable service.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md w-full md:w-1/3">
              <Handshake className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Trust & Integrity</h3>
              <p className="text-gray-600 text-sm">Building lasting relationships through honesty and transparent practices.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md w-full md:w-1/3">
              <Lightbulb className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Continuous Innovation</h3>
              <p className="text-gray-600 text-sm">Constantly evolving our technology to offer superior protection.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md w-full md:w-1/3">
              <Users className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">User-Centric Design</h3>
              <p className="text-gray-600 text-sm">Designing our service with your ease of use and satisfaction in mind.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="bg-red-500 text-white p-8 md:p-12 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Join the LaslesVPN Family Today!
          </h2>
          <p className="mt-2 text-lg opacity-90">
            Experience the internet the way it was meant to be – secure, private, and unlimited.
          </p>
          <button onClick={HandleJoin} className="mt-6 bg-white text-red-500 font-bold py-3 px-8 rounded-lg transition-colors hover:bg-gray-100">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
