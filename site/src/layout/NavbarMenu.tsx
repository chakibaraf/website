import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';

import "../style/index.css";

const NavbarMenu = () => {

  const  [open,setOpen] = useState(false);
  
  return (
    <>
    
    <div className= ' bg-black opacity-70  w-full fixed top-0 left-0 z-50'>
      <header className='sm:flex items-center justify-between py-4 sm:px-10 px-7'>
        <h1 className='w-18 text-2xl text-white'>GMA</h1>
        <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer sm:hidden'>
        <IonIcon className='text-white' name={open ?'close':'menu'} />

        </div>
        <nav className= {`sm:flex sm:items-center sm:pb-0 pb-12 absolute 
          sm:static sm:z-auto z-[-1] left-0 w-full sm:w-auto sm:pl-0 pl-9 bg-black ${open ? 'top-20':'top-[-490px]'}`}>
          <NavLink className='sm:ml-8 mt-2 mr-5 flex flex-col text-white text-xl no-underline hover:no-underline' to='/'>Accueil</NavLink>
          <NavLink className='sm:ml-8 mt-2 mr-5 flex flex-col text-white text-xl no-underline hover:no-underline' to='/collections'>Collections</NavLink>
          <NavLink className='sm:ml-8 mt-2 mr-5 flex flex-col text-white text-xl no-underline hover:no-underline' to='/apropos'>À propos</NavLink>
          <NavLink className='sm:ml-8 mt-2 mr-5 text-white text-xl no-underline hover:no-underline' to='/contact'>Contact</NavLink>
        </nav>
      </header>
    </div>
            </>
  )
}

export default NavbarMenu;