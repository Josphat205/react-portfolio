import React from 'react'
import "./index.css";
import ProjectData from './data/ProjectData';
function Work() {
  return (
    <div name='work' className=' w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-5 mt-10'>
            <p className=' text-3xl font-bold inline border-b-4 text-gray-300  border-green-600'>Work</p>
            <p className=" py-4">// Check out some of my recent work</p>
        </div>
        <div 
         className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ProjectData.map((data)=>{
                return(
                    <div
                    key={data.id}
            style={{backgroundImage:`url(${data.img})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hoffer effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                       {data.name}
                    </span>
                    <div className='pt-8 text-center'>

                        <a href={data.live}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button>
                        </a>
                        <a href={data.demo}>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                        </a>
                    </div>
                </div>
            </div>
                )
            })}
        </div>
      </div>
   </div>
  )
}

export default Work