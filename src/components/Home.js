import React, { Component } from "react";
import Typical from "react-typical";
function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('jk-resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'jk-resume.pdf';
            alink.click();
        })
    })
}
  return (
    <div name="" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 justify-center h-full flex flex-col">
        <p className="text-gray-200">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Josphat Kiploman
        </h1>
        <h3 className="text-3xl pt-3 sm:text-4xl font-bold text-[#8b8f9b]">
          I am a
          <Typical
            steps={[
              " Full-Stack Developer!",
              500,
              " UI/UX Designer!",
              500,
              " Software Engineer!",
              500,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </h3>
        <p className="py-4 max-w-[700px] text-[#d3d7e4] ">
          Dedicated full-stack developer who brings a creative and
          solution-oriented mindset to every team and project. Passionate about
          writing clean code that is reusable and follows the Dry principle.
          Design interfaces that incorporate accessibility and user-friendliness
          approach all new projects with the priorities of simplicity and
          functionality
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
          <button className="bg-gray-300 mr-3 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
    </div>
  );
}

export default Home;
