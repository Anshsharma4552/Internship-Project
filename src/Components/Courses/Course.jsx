import React from 'react';
import { motion } from 'framer-motion';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorageIcon from '@mui/icons-material/Storage';
import InsightsIcon from '@mui/icons-material/Insights';
import LanguageIcon from '@mui/icons-material/Language';
import CampaignIcon from '@mui/icons-material/Campaign';
import PythonIcon from '@mui/icons-material/Code'; // Python-specific icon not in MUI, so Code is used
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ForumIcon from '@mui/icons-material/Forum';
import MemoryIcon from '@mui/icons-material/Memory';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { slideLeft } from '../utility/animation';

const courses = [
  {
    id: 1,
    title: "Advanced Excel & VBA Macros",
    description: "Learn Excel formulas, charts, and how to automate tasks using VBA. Great for office and finance jobs.",
    category: "Data & Productivity",
    icon: <BarChartIcon className="text-blue-600" />,
    readMoreUrl: "https://www.websjyoti.com/excel_training.php"
  },
  {
    id: 2,
    title: "SQL & Database Basics",
    description: "Understand how to use SQL to get data from databases. Practice real examples using MySQL or SQL Server.",
    category: "Data Management",
    icon: <StorageIcon className="text-blue-600" />,
    readMoreUrl: "https://www.websjyoti.com/sql_training.php"
  },
  {
    id: 3,
  title: "ChatGPT & OpenAI Tools",
  description: "Explore how to use ChatGPT, build AI-driven apps with OpenAI APIs, and automate tasks using advanced language models.",
  category: "Artificial Intelligence",
  icon: <InsightsIcon className="text-blue-600" />,
  readMoreUrl: "https://www.websjyoti.com/chatgpt_training.php"
  },
  {
    id: 4,
    title: "Web Designing & UI/UX",
    description: "Learn to build modern websites using HTML, CSS, and JavaScript. Understand how to make designs user-friendly.",
    category: "Web Development",
    icon: <LanguageIcon className="text-blue-600" />,
    readMoreUrl: "https://www.websjyoti.com/design_training.php"
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Learn SEO, social media ads, Google Analytics, and how to grow business online with marketing tools.",
    category: "Marketing",
    icon: <CampaignIcon className="text-blue-600" />,
    readMoreUrl: "https://www.websjyoti.com/seo_training.php"
  },
  {
    id: 6,
  title: "Java & J2EE",
  description: "Learn core Java concepts, object-oriented programming, and build enterprise applications using J2EE technologies.",
  category: "Programming",
  icon: <MemoryIcon className="text-blue-600" />,
  readMoreUrl: "https://www.websjyoti.com/java_training.php"
  },
  {
    id: 7,
    title: "Business Reports with Excel",
    description: "Create reports and dashboards using Excel tools like Power Query and Pivot Tables.",
    category: "Data Visualization",
    icon: <QueryStatsIcon className="text-blue-600" />,
    readMoreUrl: "https://www.websjyoti.com/excel_training.php"
  },
  {
    id: 8,
    title: "Soft Skills & Communication",
    description: "Improve your speaking, writing, teamwork, and leadership skills for the workplace.",
    category: "Professional Development",
    icon: <ForumIcon className="text-blue-600" />,
    readMoreUrl: "https://websjyoti.com/soft-skills-communication"
  },
  {
    id: 9,
    title: "PHP & Backend Development",
    description: "Learn to build dynamic websites using PHP and MySQL. Great for backend or full-stack developers.",
    category: "Backend Development",
    icon: <MemoryIcon className="text-blue-600" />,
    readMoreUrl: "https://www.websjyoti.com/php_training.php"
  },
];

const Course = () => {
  const handleReadMore = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
    <section id='courses'>
    <div className="py-12 px-4 md:px-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Corporate Training Module</h2>

      <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <motion.div
            variants={slideLeft(course.delay)} 
            initial="hidden"
            whileInView={"visible"}   
          key={course.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-2 mb-3">
              {course.icon}
              <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex items-center justify-between">
              <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                {course.category}
              </span>
              <button
                onClick={() => handleReadMore(course.readMoreUrl)}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300 group"
              >
                <span>Read More</span>
                <ArrowForwardIcon className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
    </>
  );
};

export default Course;