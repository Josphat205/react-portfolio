import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  HiOutlineMail
} from "react-icons/hi";
import {
  GrResume
} from "react-icons/gr";
import Logo from "../assets/logo1.jpg";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(false);
  return (
    <div className=" sticky my-0 w-full justify-between items-center text-gray-200 flex px-4 h-[80px] bg-slate-900">
      <div className="logo">
      <img src="https://res.cloudinary.com/defpepdn3/image/upload/v1668596601/logo/logo_rvf4ds.png" className=" text-gray-200 my-logo  mr-3 h-15" alt="Flowbite Logo"/>
      </div>
      {/* navlinks */}
      <ul className="hidden md:flex">
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'> <li>About</li></Link>
        <Link to='/skills'><li>Skills</li></Link>
        <Link to='/work'><li>Work</li></Link>
        <Link to='/testimonial'> <li>Testimonial</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      
      </ul>
      {/* humberguer */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      {/* mobile version */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen opacity-100 bg-slate-900 flex flex-col justify-center items-center"
        }
      >
        <Link to='/'><li onClick={closeNav} className="text-3xl mt-0 pt-0 pb-4">Home</li></Link>
        <Link to='/about'> <li onClick={closeNav} className="text-3xl py-4">About</li></Link>
        <Link to='/skills'><li onClick={closeNav} className="text-3xl py-4">Skills</li></Link>
        <Link to='/work'><li onClick={closeNav} className="text-3xl py-4">Work</li></Link>
        <Link to='/testimonial'> <li onClick={closeNav} className="text-3xl py-4">Testimonial</li></Link>
        <Link to='/contact'><li onClick={closeNav} className="text-3xl py-4">Contact</li></Link>
      </ul>

      {/* social links */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-2">
        <ul>
          <li className="w-[160px] h-[60px] justify-between items-center flex ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
          <a className="flex justify-between items-center w-full" href="https://www.linkedin.com/in/josphatloman/">
          Linkedin <FaLinkedin size={30} />
          </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between items-center flex ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
          <a className="flex justify-between items-center w-full" href="https://github.com/Josphat205">
          Github <FaGithub size={30} />
          </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between items-center flex ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
          <a className="flex justify-between items-center w-full" href="/">
          Email <HiOutlineMail size={30} />
          </a>
          </li>
          <li className="w-[160px] h-[60px] justify-between items-center flex ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
          <a className="flex justify-between items-center w-full" href="/">
          Resume <GrResume size={30} />
          </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
