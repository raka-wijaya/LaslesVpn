import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from '../assets/Navbar/Vector.svg'

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16">

        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img src={Image} alt="" className="h-8 w-8"/>
            <span className="text-xl font-bold text-gray-800">Lasles<span className="font-normal">VPN</span></span>
          </div>
          <p className="mt-4 text-gray-500 text-sm leading-relaxed">
            LaslesVPN is a private virtual network that has unique features and has high security.
          </p>
          <div className="flex space-x-4 mt-6">
            <a 
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label='Facebook'
            className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label='Twitter' 
            className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label='Instagram' 
            className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors">
              <FaInstagram />
            </a>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            ©2020LaslesVPN
          </p>
        </div>

        <div className="md:col-span-1 lg:col-start-2 lg:col-span-1">
          <h3 className="font-bold text-gray-800 mb-4">Product</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="/download" className="hover:text-red-500">Download</a></li>
            <li><a href="/pricing" className="hover:text-red-500">Pricing</a></li>
            <li><a href="/locations" className="hover:text-red-500">Locations</a></li>
            <li><a href="/server" className="hover:text-red-500">Server</a></li>
            <li><a href="/countries" className="hover:text-red-500">Countries</a></li>
            <li><a href="blog" className="hover:text-red-500">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">Engage</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="/laslesvpn?" className="hover:text-red-500">LaslesVPN ?</a></li>
            <li><a href="/faq" className="hover:text-red-500">FAQ</a></li>
            <li><a href="/tutorials" className="hover:text-red-500">Tutorials</a></li>
            <li><a href="/about" className="hover:text-red-500">About Us</a></li>
            <li><a href="/privacypolicy" className="hover:text-red-500">Privacy Policy</a></li>
            <li><a href="/termsofservice" className="hover:text-red-500">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-800 mb-4">Earn Money</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="/affiliate" className="hover:text-red-500">Affiliate</a></li>
            <li><a href="/become-partner" className="hover:text-red-500">Become Partner</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;