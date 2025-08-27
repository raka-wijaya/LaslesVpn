import React from 'react';
import GlobalMap from '../assets/Global/Huge Global.svg'; 
import MaskGroup1 from '../assets/Global/Mask Group.svg';   
import MaskGroup2 from '../assets/Global/Mask Group (1).svg'; 
import MaskGroup3 from '../assets/Global/Mask Group (2).svg';
import MaskGroup4 from '../assets/Global/Mask Group (3).svg'; 
import MaskGroup5 from '../assets/Global/Mask Group (4).svg'; 


const GlobalNetworkSection = () => {
    const brandLogos = [
        MaskGroup1,
        MaskGroup2,
        MaskGroup3,
        MaskGroup4,
        MaskGroup5,
    ];

    return (
        <div className="bg-white py-16 lg:py-24"> 
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="font-medium text-4xl lg:text-5xl text-gray-800 leading-tight mb-4">
                        Huge Global Network <br className="hidden sm:block" />
                        of Fast VPN
                    </h2>
                    <p className="text-base text-gray-600 mb-12 max-w-2xl">
                        See <span className="font-medium">LaslesVPN</span> everywhere to make it easier for you when you move locations.
                    </p>

                    <div className="w-full mt-9">
                        <img 
                            src={GlobalMap} 
                            alt="Huge Global Network Map" 
                            className="w-full h-auto object-contain max-w-5xl mx-auto" 
                        />
                    </div>

                    <div className="w-full mt-20">
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-16">
                            {brandLogos.map((logo, index) => (
                                <img 
                                    key={index} 
                                    src={logo} 
                                    alt={`Brand Logo ${index + 1}`} 
                                    className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalNetworkSection;