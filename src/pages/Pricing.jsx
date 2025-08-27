import React, { useState } from 'react'; 
import CheckIcon from '../assets/jam_check.png';
import PlanImage from '../assets/Free.svg';


const PlanCard = ({ planName, features, price, isSelected, onSelect }) => {
  return (
    <div
      className={`w-full max-w-[330px] border bg-white rounded-xl mx-auto
                  ${isSelected ? 'border-[#F53838] shadow-lg' : 'border-gray-200'}
                  transition-all duration-300 transform hover:scale-105`} 
    >
      <div className="flex flex-col items-center justify-between p-10 h-full">
        <div className="flex flex-col items-center space-y-10">
          <img
            src={PlanImage}
            className="w-[144.9px] h-[165.37px]"
            alt={`Illustration for ${planName}`}
          />
          <h1 className="font-medium text-lg text-gray-800">{planName}</h1>
          <div className="flex flex-col space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-row gap-2 items-center">
                <img src={CheckIcon} alt="check icon" className="w-4 h-4" />
                <h1 className="text-sm text-gray-600">{feature}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex flex-col items-center space-y-5">
            <h1 className="font-medium text-2xl text-gray-800 mt-10">
              {price}
            </h1>
            <button
              className={`w-[177.88px] h-11 rounded-full text-base font-bold transition-colors duration-300
                ${isSelected ? 'bg-red-500 text-white shadow-xl' : 'bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'}`} // Perubahan di sini
              type="button"
              onClick={onSelect}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const PricingSection = () => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(null);

  const plans = [
    {
      name: "Free Plan",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
      isPremium: false,
    },
    {
      name: "Standard Plan",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
      price: "$9 / mo",
      isPremium: false,
    },
    {
      name: "Premium Plan",
      features: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
      price: "$12 / mo",
      isPremium: true,
    },
  ];

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="font-medium text-4xl text-gray-800">
            Choose Your Plan
          </h1>
          <p className="text-base text-gray-600 mt-4">
            Let's choose the package that is best for you and explore it
            happily and cheerfully.
          </p>
        </div>

        <div className="mt-10 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-center">
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                planName={plan.name}
                features={plan.features}
                price={plan.price}
                isPremium={plan.isPremium}
                isSelected={selectedPlanIndex === index}
                onSelect={() => setSelectedPlanIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;