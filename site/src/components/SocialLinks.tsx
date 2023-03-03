import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="flex items-center mr-20 justify-end h-10 mt-10 ">
      <div >

        <FaTwitter className='mr-4 text-4xl'/>
      </div>

      <div>

        <FaFacebook className='mr-4 text-4xl'/>
      </div>

      <div>

        <FaInstagram className='mr-4 text-4xl'/>
      </div>

      <div>

        <FaLinkedin className='mr-4 text-4xl' />
      </div>

     
      </div>

      );
}
