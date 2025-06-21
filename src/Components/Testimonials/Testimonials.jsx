import React from 'react'
import { motion } from 'framer-motion';
import { slideLeft } from '../utility/animation';
const testimonialsData = [
  {
    id: 1,
    name: "Seema Prem (Co‑Founder, FIA Global)",
    text: "Hirdesh conducted a number of advanced Excel trainings for FIA. He explains concepts very simply, ensuring that we improve the way we use Excel.",
    img: "/image copy 3.png",
    delay: 0.2
  },
  {
    id: 2,
    name: "Serigne Ndiaye (Sr Business Consultant)",
    text: "I highly recommend Mr. Hirdesh Bhardwaj. He possesses key skills in management and data analytics that are valuable for any business environment.",
    img: "/image copy 4.png", 
    delay: 0.2
  },
  {
    id: 3,
    name: "Roni Jeffy Salomo (BD Enthusiast)",
    text: "Very passionate and enthusiastic trainer in SQL and Data Science. His contribution to several books is unforgettable and truly commendable.",
    img: "/image copy 5.png", 
    delay: 0.2
  },
  {
  id: 4,
  name: "Neha Arora (Training Coordinator, Axis Bank)",
  text: "Hirdesh is an exceptional trainer who makes even the most complex tools like VBA and Power BI easy to understand. The feedback from our employees has been outstanding.",
  img: "/image copy 6.png", // Replace with actual image or placeholder
  delay: 0.5
},
{
  id: 5,
  name: "Amit Sharma (Team Lead, Infosys)",
  text: "We appreciated the structured and real-world focused sessions by Hirdesh. His practical examples and hands-on approach truly set the training apart.",
  img: "/image copy 7.png", // Replace with actual image or placeholder
  delay: 0.5
}
];

function Testimonials() {
  return (
    <>
    <section id='testimonial'>
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Testimonials</h2>
    <div className="py-12 px-4 md:px-10 ">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-10">What Our Clients Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((t) => (
        <div
            key={t.id}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
            <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-2 border-blue-500"
            />
            <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">"{t.text}"</p>
            </div>

        ))}
      </div>
    </div>
    </section>
</>
  )
}

export default Testimonials