import React from 'react'
import { Collections } from '../Collections'
import { Outlet } from 'react-router-dom';
const CLayout = () => {
  return (
    <div>
        <Collections/>
        <div>
         
          <Outlet />
        </div>
    </div>
  )
}

export default CLayout