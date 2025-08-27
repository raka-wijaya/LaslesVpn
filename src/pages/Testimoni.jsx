import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import ViezbRobert from '../assets/Testimoni/Ellipse 175.svg';
import YessicaChristy from '../assets/Testimoni/Ellipse 175 (1).svg';
import KimYoungJou from '../assets/Testimoni/Ellipse 175 (2).svg';


const TestimonialCard = ({ user, testimonial, isSelected }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-8 sm:p-10 border-2
        ${isSelected ? 'border-red-500' : 'border-gray-200'}
        flex flex-col h-full transition-all duration-300 transform hover:scale-105`}
    >
      <div className="flex items-center mb-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <h4 className="font-medium text-lg text-gray-800">{user.name}</h4>
          <p className="text-sm text-gray-500">{user.location}</p>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="mr-1">{user.rating}</span>
          <svg className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{testimonial}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      user: {
        name: "Viezb Robert",
        location: "Warsaw, Poland",
        rating: 4.5,
        image: ViezbRobert
      },
      testimonial: "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
    },
    {
      user: {
        name: "Yessica Christy",
        location: "Shanxi, China",
        rating: 4.5,
        image: YessicaChristy
      },
      testimonial: "“I like it because I like to travel far and still can connect with high speed”."
    },
    {
      user: {
        name: "Kim Young Jou",
        location: "Seoul, South Korea",
        rating: 4.5,
        image: KimYoungJou
      },
      testimonial: "“This is very unusual for my business that currently requires a virtual private network that has high security”."
    },
  ];

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <h2 className="font-medium text-4xl text-gray-800 leading-tight mb-4">
            Trusted by Thousands of <br className="hidden md:block"/> Happy Customer
          </h2>
          <p className="text-base text-gray-600 max-w-xl">
            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              user={testimonial.user}
              testimonial={testimonial.testimonial}
              isSelected={currentTestimonialIndex === index}
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-12">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300
                  ${currentTestimonialIndex === index ? 'bg-red-500 w-10' : 'bg-gray-300'}`}
                onClick={() => setCurrentTestimonialIndex(index)}
              ></span>
            ))}
          </div>
          <div className="flex gap-4">
            <button
              className="p-3 border-2 rounded-full transition-colors duration-300
                hover:border-red-500 hover:text-red-500"
              onClick={handlePrev}
            >
              <ArrowLeft />
            </button>
            <button
              className="p-3 border-2 rounded-full transition-colors duration-300
                hover:bg-red-500 hover:text-white"
              onClick={handleNext}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;