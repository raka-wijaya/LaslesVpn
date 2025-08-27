import React from 'react';
import UserIcon from '../assets/Statistics/user.svg'; 
import LocationIcon from '../assets/Statistics/location.svg'; 
import ServerIcon from '../assets/Statistics/server.svg'; 

const Statistics = () => {
  const stats = [
    {
      iconSrc: UserIcon,
      altText: 'User Icon',
      count: '90+',
      label: 'Users'
    },
    {
      iconSrc: LocationIcon,
      altText: 'Location Icon',
      count: '30+',
      label: 'Locations'
    },
    {
      iconSrc: ServerIcon,
      altText: 'Server Icon',
      count: '50+',
      label: 'Servers'
    }
  ];

  return (
    <div className="bg-white py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-400">
          {stats.map((stat, index) => (
            <div key={index} className="flex-1 py-6 md:py-0 px-4">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-red-100 bg-opacity-10 p-4 rounded-full">
                  <img src={stat.iconSrc} alt={stat.altText} className="h-6 w-6 text-red-500" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{stat.count}</h2>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;