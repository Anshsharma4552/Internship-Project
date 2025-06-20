import React from 'react'
import { motion } from 'framer-motion';
import BuildIcon from '@mui/icons-material/Build';
import DevicesIcon from '@mui/icons-material/Devices';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TuneIcon from '@mui/icons-material/Tune';
import { slideLeft } from '../utility/animation';

const AboutUs=[
    {
        id:1,
        title: "Hands-on, project-based learning",
        desc: "Each session includes live exercises and real business scenarios. Learners practice by solving challenges, ensuring retention and application.",
        icon: <BuildIcon/>,
        delay:0.3,
    },
    {
        id:2,
        title: "Industry-Certified Trainers with Practical Expertise",
        desc: "Our trainers are certified professionals with real-world industry experience. They bring practical knowledge and insights that go beyond theory.",
        icon: <TuneIcon/>,
        delay:0.6,
    },
    {
        id:3,
        title: "On-site, Online, and Hybrid Delivery Options",
        desc: "We deliver training at your office, remotely, or through a flexible hybrid model. Choose what works best for your team’s convenience and productivity.",
        icon: <DevicesIcon/>,
        delay:0.9,
    },
    {
        id:4,
        title: " Post-Training Evaluation and Support",
        desc: "We provide detailed assessments, feedback, and follow-up resources. Our goal is to ensure long-term skill retention and on-the-job performance.",
        icon: <AssessmentIcon/>,
        delay:0.9,
    },

]
function About() {
  return (
    <div className='bg-[#f9fafc]'>
        <div className="py-24">
            <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5 '>
                <h1 className='uppercase font-bold text-gray-800'>About Us</h1>
                <p className='font-semibold text-3xl'>Our Areas of Expertise</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    AboutUs.map((item)=>{
                        return(
                            <motion.div
                            variants={slideLeft(item.delay)} 
                            initial="hidden"
                            whileInView={"visible"}
                            className='space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.1)]'>
                                <div className='w-10 h-10 rounded-lg flex justify-center items-center text-blue-600'>
                                    <div className='text-2xl'>{item.icon}</div>
                                </div>
                                <p className='font-semibold'>{item.title}</p>
                                <p className='text-m text-gray-500'>{item.desc}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
        <div className='space-y-4  text-center max-w-[500px] mx-auto mb-5'>
        <h1 className='uppercase font-bold text-gray-800 text-2xl'>Meet Our Expert</h1>
        <p className='text-gray-600 text-sm'>
            Learn from industry leader Hirdesh Bhardwaj — 17+ years of experience in corporate training and data analytics.
        </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 px-6 md:px-16 py-10 bg-gray-100 rounded-lg shadow-md" data-aos="fade-up">

        <div className="w-full md:w-1/3 flex justify-center">
            <img src="src/assets/image copy 2.png" alt="Hirdesh Bhardwaj" className="rounded-xl shadow-lg w-64 h-64 object-cover" />
        </div>

        <div className="w-full md:w-2/3 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Hirdesh Bhardwaj</h2>
            <p className="text-sm md:text-base text-gray-600 font-medium mb-1">
            Principal Trainer | Founder | Author  
            </p>
            <p className="text-sm md:text-base text-gray-600 font-medium mb-1">
            Founder & Lead Data Analytics Trainer at <strong>Webs Jyoti</strong>
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
            With over <strong>17 years of experience</strong>, Hirdesh has empowered thousands of professionals and corporate teams in areas like <strong>Excel, VBA, SQL, Power BI, and Digital Analytics</strong>. He's also a published author and a respected voice in corporate upskilling, known for his hands-on, results-driven training approach.
            </p>
        </div>
        </div>

    </div>
  )
}

export default About