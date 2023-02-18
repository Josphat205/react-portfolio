import React from "react";
import './Project.css';
import { motion } from "framer-motion";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
const features = [
  
  {
    name: "Academic research projects.",
    description:
      "If you are a student looking for help with an academic research project, I can offer expertise in psychology and research methodology, as well as support with data collection and analysis, writing, and editing.",
    icon: LockClosedIcon,
  },
  {
    name: "Business writing projects.",
    description:
      "If you are a business looking for help with proposal writing or other types of business writing, I can offer expertise in persuasive writing, research, and project management, as well as support with editing and formatting. ",
    icon: ServerIcon,
  },
  {
    name: "Web development projects.",
    description:
      "If you are a business looking for help with website development or redesign, I can offer expertise in web design, front-end and back-end development, and e-commerce integration, as well as support with testing, debugging, and ongoing maintenance.",
    icon:CloudArrowUpIcon,
  },
];
const Project = () => {
  return (
    <motion.div 
     initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    className="overflow-hidden bg-white py-24 sm:py-32 main">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl title1 text-purple-600">
                A BETTER WORKFLOW FOR YOUR PROJECT
                <hr className="hr" />
              </p>
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 title2">
                All Types of project support
              </h2>
              <dl className="mt-5 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map(feature =>
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline description">{feature.description}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
         <div className="img-container">
         <img
            src="https://res.cloudinary.com/defpepdn3/image/upload/v1676721304/portfolio%20img/PRISMA-multiple-mockups-optimized-768x391_apa17j.jpg"
            alt="Product screenshot"
            className="img"
          />
           <img
            src="https://res.cloudinary.com/defpepdn3/image/upload/v1676721799/portfolio%20img/c98326eee204382ca709c7521082846a_n036od.webp"
            alt="Product screenshot"
            className="img"
          />
         </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
