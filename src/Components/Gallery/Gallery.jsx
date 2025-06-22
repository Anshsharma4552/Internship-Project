import React from 'react';

const galleryImages = [
  { image: '/image copy 15.png', caption: 'Soft Skills Training at Paras Dairy Ghazibad' },
  { image: '/image copy 16.png', caption: 'Advanced Excel Training conducted at Paras Dairy Pan India' },
  { image: '/image copy 17.png', caption: 'Corporate Training at Del Monte Foods, Gurugram - Haryana' },
  { image: '/image copy 18.png', caption: 'Excel Training at Del Monte Foods Chandigarh' },
  { image: '/image copy 19.png', caption: 'Excel Corporate Session at DCM Shriram, RO Jaipur - Rajasthan' },
  { image: '/image copy 20.png', caption: 'Corporate Session at Beumer' },
  { image: '/image copy 21.png', caption: 'Corporate Training at Eximius Ventures' },
  { image: '/image copy 22.png', caption: 'Corporate Session at PGS Partner' },
  { image: '/image copy 24.png', caption: 'Corporate Session at Alpine India' },
  { image: '/image copy 25.png', caption: 'Corporate Session at Hema Engineering' },
  { image: '/image copy 26.png', caption: 'Corporate Session at Cars 24' },
  { image: '/image copy 23.png', caption: 'Corporate Session at FIA' },
  { image: '/image copy 27.png', caption: 'Corporate Session at Bigbasket' },
  { image: '/image copy 28.png', caption: 'Corporate Session at Yashkawa' },
  { image: '/image copy 29.png', caption: 'Corporate Session at Sigma Consultancy' },
  { image: '/image copy 30.png', caption: 'Corporate Session at  Rosmerta' },
];

function Gallery() {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Training Highlights from Our Pan India Sessions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {galleryImages.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 shadow-xl rounded-2xl overflow-hidden w-80 md:w-96 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-56 md:h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-700">{item.caption}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
