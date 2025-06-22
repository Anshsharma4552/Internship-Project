// Locations.jsx
import React from 'react';

const locations = [
  {
    name: "Kanpur",
    image: "/image copy 8.png",
  },
  {
    name: "Faridabad",
    image: "/image copy 9.png",
  },
  {
    name: "Lucknow",
    image: "/image copy 10.png",
  },
  {
    name: "Chennai",
    image: "/image copy 11.png",
  },
  {
    name: "Hyderabad",
    image: "/image copy 12.png",
  },
  {
    name: "Bhopal",
    image: "/image copy 12.png",
  },
  {
    name: "Chandigarh",
    image: "/image copy 14.png",
  },
];

const Locations = () => {
  return (
    <section id='location' className="bg-gray-100 py-12 px-4 md:px-10">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">📍 Our Locations</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
    {locations.map((loc, idx) => (
      <div
        key={idx}
        className="bg-white shadow-xl rounded-2xl overflow-hidden w-80 md:w-96 hover:scale-105 transition-transform duration-300"
      >
        <img
          src={loc.image}
          alt={loc.name}
          className="w-full h-56 md:h-64 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-700">{loc.name}</h3>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Locations;
