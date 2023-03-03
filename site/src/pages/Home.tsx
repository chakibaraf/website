import React from 'react'
import { About } from '../components/About'
import { ButtonApropos } from '../components/boutonAnimation/ButtonApropos'
import ImagePresentation from '../components/ImagePresentation'
import { Footer } from '../layout/Footer'
import { Gallerie } from '../components/Gallerie'
import Banniere from '../layout/Banniere'
import "../style/index.css";




const Home = () => {
  return (
    <div>
      
        <ImagePresentation/>
        <ButtonApropos/>
        
        <About/>
        <Gallerie/>
        <Banniere/>
        
        <Footer/>
        
    </div>
  )
}

export default Home