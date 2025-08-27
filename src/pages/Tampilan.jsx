import React from 'react';
import { Star } from 'lucide-react'; 

const TestimonialsSection = () => {
  // Data testimoni dinonaktifkan sementara karena tidak ingin ditampilkan
//   const dummyTestimonials = [
//     {
//       name: "John Doe",
//       location: "New York, USA",
//       quote: "LaslesVPN changed my online experience! Super fast and secure.",
//       rating: "5.0",
//       avatar: "https://placehold.co/48x48/F53838/ffffff?text=JD",
//     },
//     {
//       name: "Jane Smith",
//       location: "London, UK",
//       quote: "Reliable and easy to use. Highly recommend for privacy.",
//       rating: "4.8",
//       avatar: "https://placehold.co/48x48/F53838/ffffff?text=JS",
//     },
//     {
//       name: "Budi Santoso",
//       location: "Jakarta, Indonesia",
//       quote: "Koneksi stabil dan bisa akses konten dari mana saja. Sangat membantu!",
//       rating: "4.9",
//       avatar: "https://placehold.co/48x48/F53838/ffffff?text=BS",
//     },
//   ];

  return (
    <div className="bg-gray-50 font-sans py-24 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What Our Users Say
        </h2>
        {/* <p className="mt-4 text-gray-600 max-w-3xl mx-auto mb-12">
          Kami berkomitmen untuk memberikan layanan terbaik. Nantikan testimoni dari pengguna kami yang puas!
        </p> */}
        <div className="flex justify-center items-center h-64 bg-white rounded-xl shadow-lg border border-gray-200">
          <p className="text-xl text-gray-500 italic">
            "No one's told me yet. Let's come back later!"
          </p>
        </div>

        {/* <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
          {dummyTestimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md w-full md:w-1/3 text-left">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4" 
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/48x48/cccccc/ffffff?text=?" }} 
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 text-base mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" />
                <span className="text-gray-600">{testimonial.rating}</span>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialsSection;
