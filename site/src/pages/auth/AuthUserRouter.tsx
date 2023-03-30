import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Erreur from '../Erreur'

import LoginUser from './LoginUser'

const AuthUserRouter = () => {
  return (
    <Routes>
    <Route path='/*' element={<LoginUser/>}></Route>
  
   <Route path='collection'element={<LoginUser/>}> </Route>
   <Route path='*' element={<Erreur/>}></Route>
    </Routes>
  )
}

export default AuthUserRouter