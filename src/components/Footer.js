import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5 bg-[#0a192f]'>
      
<footer className="p-4 bg-[#0a192f] rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://res.cloudinary.com/defpepdn3/image/upload/v1686049577/logo/lg_bvqcoy.png" className="mr-3 my-logo h-8" alt="Flowbite Logo"/>
            <span className="text-gray-200 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">M-loman</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span className="block text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/josphatloman/" className="hover:underline">Mloman™</a>. All Rights Reserved.
    </span>
</footer>

    </div>
  )
}

export default Footer
