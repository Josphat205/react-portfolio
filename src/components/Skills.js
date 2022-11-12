import HTML from '../assets/html5.png';
import CSS from '../assets/css3.png';
import Js from '../assets/javascript.png';
import Github from '../assets/github.png';
import React from '../assets/react.png';
import Git from '../assets/git.png';
import Boot from '../assets/bootstrap.png';
import Node from '../assets/node.jpg';
import Mysql from '../assets/mysql.png';
import Rails from '../assets/rails.png';
import Ruby from '../assets/ruby.png';
import Postgres from '../assets/post.jpg';
import Express from '../assets/express.png';
import Tailwind from '../assets/tail.png';
const Skills = () =>{
    return (
        <div name='skills' className='bg-[#0a192f] text-gray-300'>
        {/* Container */}
          <div className='max-w-(1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className='mt-10 lg:ml-[100px]'>
                  <p className="text-4xl font-bold inline border-b-4 border-green-500">Experience</p>
                  <p className="py-4">These are the technologies I've worked with</p>
              </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={HTML} alt="HTHL icon" />
                      <p className="my-4">HTHL</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={CSS} alt="HTHL icon" />
                      <p className="my-3">CSS</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Js} alt="HTHL icon" />
                      <p className="my-4">JAVASCRIPT</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={React} alt="HTHL icon" />
                      <p className="my-4">REACT</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Ruby} alt="HTHL icon" />
                      <p className="my-4">RUBY</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Rails} alt="HTHL icon" />
                      <p className="my-4">RAILS</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Node} alt="HTHL icon" />
                      <p className="my-4">NODEJS</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Boot} alt="HTHL icon" />
                      <p className="my-4">BOOTSTRAP</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Github} alt="HTHL icon" />
                      <p className="my-4">GITHUB</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Git} alt="HTHL icon" />
                      <p className="my-4">GIT</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Mysql} alt="HTHL icon" />
                      <p className="my-4">MYSQL</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Postgres} alt="HTHL icon" />
                      <p className="my-4">POSTGRES</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Express} alt="HTHL icon" />
                      <p className="my-4">EXPRESSJS</p>
                  </div>
                  <div className="shadow-md shadow-gray-800 hover:scale-110 duration-500">
                      <img className="w-20 mx-auto" src={Tailwind} alt="HTHL icon" />
                      <p className="my-4">TAILWIND</p>
                  </div>
             </div>
         </div>  
         </div>
            )           
    }
     
  
  export default Skills