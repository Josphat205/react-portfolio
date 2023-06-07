import React, { Component } from "react";
import Typical from "react-typical";
import {motion} from "framer-motion"
import resume from './documents/jk-resume.pdf'
import cv from './documents/jk-cv.pdf'
function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(resume).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = resume;
            alink.click();
        })
    })
}
const onButtonCv = () => {
  // using Java Script method to get PDF file
  fetch(cv).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = cv;
          alink.click();
      })
  })
}
  return (
    <motion.div name="" id="home" className="w-full h-screen bg-[#0a192f]"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 justify-center h-full flex flex-col">
        <div className="title-contain mt-4">
        <div className="titles">
        <p className="text-gray-200">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Josphat Kiploman
        </h1>
        </div>
        <div className="img-contain">
          <img src="https://res.cloudinary.com/defpepdn3/image/upload/v1668598153/logo/yu_xfsdjy.jpg" alt="image" />
        </div>
        </div>
        <h3 className="text-2xl pt-3 sm:text-3xl font-bold text-[#8b8f9b]">
          <span className="typi">I am a</span>
          <Typical
            steps={[
              " Full-Stack Developer...!",
              500,
              " Good Team player...!",
              500,
              " Software Engineer...!",
              500,
              " Time and Task Manager...!",
              500,
              " Creative problem-solver...!",
              500,
              " Quick Learner...!",
              500,
              " End-User Focused...!",
              500,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </h3>
        <p className="py-4 max-w-[700px] text-[#d3d7e4] md:text-lg">
        Full-Stack web developer with a background in developing efficient software applications in a global market. 2+ year of experience, including mentoring 5+ junior developers to achieve concrete goals on a strict deadline. Strong skills include React, Database management, PostgreSQL, Collaboration, Nodejs, and Rails. Seeking to leverage solid skills in collaboration, communication, and problem-solving to help the team at your company.
        </p>
        <div className="flex flex-row mt-5">
          <button onClick={onButtonClick} className="bg-green-500 mr-3 hover:bg-green-700 text-white-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Resume</span>
          </button>
          <button className="bg-gray-300 mr-3 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={onButtonCv}
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download Cv</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
