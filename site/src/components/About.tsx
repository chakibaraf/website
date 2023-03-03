import React, { Fragment } from 'react'

import AnimationTexte from './textAnimation/AnimationTexte'

export const About = () => {
  return (
    <Fragment>

    <div className='bg-black bg-opacity-80 p-4 rounded-sm w-full mt-20 text-white text-justify ...  '>
        <h1 className='text-3xl , mt-5 mb-5 text-center text-white'>Qui somme nous :</h1>
        
         <AnimationTexte text={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam dicta asperiores explicabo quibusdam minus ipsa reiciendis totam natus nulla, sapiente consequatur ratione. Adipisci quas nam inventore, provident illum laboriosam? '}/> 
    </div>
   
    </Fragment>
  )
}
