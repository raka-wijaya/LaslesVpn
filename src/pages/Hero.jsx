import React from 'react';
import HeroImage from '../assets/Hero/Illustration 1.svg';
import Statistics from './Statistics';
import FeaturesSection from './Feature';
import PricingSection from './Pricing';
import GlobalNetworkSection from './GlobalNetwork';
import TestimonialsSection from './Testimoni';
import SubscribeCard from './Subscribe';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const Navigate = useNavigate();

    const HandleGet = () => {
        Navigate('/getstarted')
    }
    return (
        <>
        <div className="bg-white pt-24 pb-16 lg:pt-32 lg:pb-16 px-4 lg:px-8">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">

                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
                        Want anything to be <br />
                        <span className="text-red-500">easy</span> with LaslesVPN.
                    </h1>
                    <p className="text-gray-600 mb-8 lg:mb-12">
                        Provide a network for all your needs with ease and fun using <span className="font-bold">LaslesVPN</span>
                        <br />discover interesting features from us.
                    </p>
                    <button onClick={HandleGet} className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        GET STARTED
                    </button>
                </div>

                <div className="hidden lg:flex lg:w-1/2">
                    <img
                        src={HeroImage}
                        alt="Man using laptop with VPN"
                        className="w-full rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </div>
        <Statistics/>
        <FeaturesSection/>
        <PricingSection/>
        <GlobalNetworkSection/>
        <TestimonialsSection/>
        <SubscribeCard/>
        <Footer/>
        </>
    );
};

export default HeroSection;