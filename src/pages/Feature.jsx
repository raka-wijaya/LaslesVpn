import React from 'react';
import { Check } from 'lucide-react';
import FeaturesImage from '../assets/Features/Illustration 2.svg';

const FeaturesSection = () => {
    const features = [
        "Powerfull online protection.",
        "Internet without borders.",
        "Supercharged VPN.",
        "No specific time limits."
    ];

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-24">
                <div className="hidden md:hidden lg:flex lg:w-1/2">
                    <img
                        src={FeaturesImage}
                        alt="Man using laptop with VPN"
                        className="w-full"
                    />
                </div>

                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-5">
                        We Provide Many <br />
                        Features You Can Use
                    </h2>
                    <p className="text-gray-600 mb-5 lg:mb-12">
                        You can explore the features that we provide with fun and have their own functions each feature.
                    </p>

                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start justify-center lg:justify-start gap-3">
                                <Check className="h-6 w-6 text-green-500" />
                                <span className="text-gray-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;