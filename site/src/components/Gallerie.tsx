import React from 'react';
import product from '../assets/gallerie/sante3.jpg';
import casque from '../assets/gallerie/casque.png'
import sante1 from '../assets/gallerie/sante1.jpg'
import { Link } from 'react-router-dom';


export const Gallerie = () => {
  return (
    <>
      <h1 className='mt-20 text-justify text-center ...'> Nos Produits :</h1>
    <div className='sm:flex mt-10 justify-center space-x-4 ...'>

      <Link to='/collections'>
        <figure className='justify-center'>
          <img className="h-auto sm:max-w-lg transition-all duration-300 rounded-sm cursor-pointer filter grayscale hover:grayscale-0 object-scale-down h-48 sm:w-96 " src={sante1} alt="description"></img>
        </figure>
      </Link>

      <div className='sm:flex justify-center'>
        <figure className='sm:flex'>
          <img className="h-auto sm:max-w-lg transition-all duration-300 rounded-sm cursor-pointer filter grayscale hover:grayscale-0 object-scale-down h-48 sm:w-96  " src={casque} alt="description"></img>
        </figure>
      </div>
      <Link to='/collections'>
        <figure className='sm:flex mt- justify-center '>
          <img className="transition-all duration-300 rounded-sm cursor-pointer filter grayscale hover:grayscale-0 object-scale-down h-50 sm:w-96 " src={product} alt="description"></img>
        </figure>
      </Link>





    </div>
    </>
  );
}