import React from 'react'

export const Footer = () => {
  return (
      
   
<footer className="mt-80 p-4 bg-black rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between text-white">
      
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GMA</span>
        
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 text-white ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 text-white">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 text-white">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline text-white">Contact</a>
        </li>
    </ul>
    </div>
    <hr className="my-6 border-gray-200 text-white sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-white text-gray-500 sm:text-center dark:text-gray-400">GMA All Rights Reserved.
    </span>
</footer>

  )
}