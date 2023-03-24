
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Erreur from '../Erreur'
import Login from './Login'

const AuthRouter = () => {
  return (
    <Routes>
    <Route path='/' element={<Login/>}></Route>
   <Route path='login'element={<Login/>}> </Route>
   <Route path='*' element={<Erreur/>}></Route>
    </Routes>
  )
}

export default AuthRouter