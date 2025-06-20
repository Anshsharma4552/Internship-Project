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
import { slideLeft } from '../utility/animation';


const courses = [
  {
    id: 1,
    title: "Advanced Excel & Excel VBA Macros",
    description: "Master formulas, pivot tables, dashboards, and automate tasks using VBA macros. Perfect for analysts, finance, and operations teams.",
    category: "Data & Productivity",
    icon: <BarChartIcon className="text-blue-600" />
  },
  {
    id: 2,
    title: "SQL & Database Management",
    description: "Learn SQL queries, joins, subqueries, and database management using MySQL or SQL Server with hands-on corporate scenarios.",
    category: "Data Management",
    icon: <StorageIcon className="text-blue-600" />
  },
  {
    id: 3,
    title: "Power BI & Tableau Data Analytics",
    description: "Transform raw data into powerful dashboards and reports using Power BI or Tableau. Learn data modeling, KPIs, and DAX.",
    category: "Business Intelligence",
    icon: <InsightsIcon className="text-blue-600" />
  },
  {
    id: 4,
    title: "Web Designing & UI/UX Fundamentals",
    description: "Learn HTML5, CSS3, JavaScript, responsive design, and user-centered UI/UX to build modern, mobile-friendly websites.",
    category: "Web Development",
    icon: <LanguageIcon className="text-blue-600" />
  },
  {
    id: 5,
    title: "Digital Marketing & Google Analytics",
    description: "Hands-on training in SEO, Google Ads, Facebook Ads, Google Analytics, and lead generation strategies tailored for businesses.",
    category: "Marketing",
    icon: <CampaignIcon className="text-blue-600" />
  },
  {
    id: 6,
    title: "Python for Data Science & Automation",
    description: "Get practical experience with Python, NumPy, Pandas, and automation scripts for analytics and workflow efficiency.",
    category: "Programming",
    icon: <PythonIcon className="text-blue-600" />
  },
  {
    id: 7,
    title: "Business Intelligence & Reporting Tools",
    description: "Create end-to-end reporting solutions using Power Query, Power Pivot, Excel BI tools, and real-time dashboards.",
    category: "Data Visualization",
    icon: <QueryStatsIcon className="text-blue-600" />
  },
  {
    id: 8,
    title: "Corporate Soft Skills & Communication",
    description: "Develop strong communication, leadership, email etiquette, and teamwork through practical soft skills training.",
    category: "Professional Development",
    icon: <ForumIcon className="text-blue-600" />
  },
  {
  id: 9,
  title: "PHP & Backend Development",
  description: "Build dynamic and scalable web applications using PHP, MySQL, and backend integration techniques. Ideal for server-side developers and full-stack learners.",
  category: "Backend Development",
  icon: <MemoryIcon className="text-blue-600" />
},
];

const Course = () => {
  return (
    <>
    <section id='courses'>
    <div className="py-12 px-4 md:px-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Courses</h2>

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
            <span className="inline-block bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              {course.category}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
    </>
  );
};

export default Course;
