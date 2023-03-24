import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import { accountService } from '../../service/account.service'

export const MenuAdmin = () => {
  let navigate = useNavigate()
  
  const logout = () => {
    accountService.logout()
    navigate('/')

  }
  return (
    <div className='border  bg-gray-300  items-center  rounded-md text-white'>
        < ul className='flex mt-10'>
            <li className=' mr-10'> <Link className='no-underline text-black' to='/'>Accueil</Link></li>
            <li className='mr-10'> <Link className='no-underline text-black' to='/admin/dashboard'>Dashboard</Link></li>
            <li> <Link className='no-underline text-black' to='/admin/user/edit'>liste des utilisateurs</Link></li>
        </ul>
        <div className='flex justify-end '>
        <button onClick={logout} className="bg-green-500 hover:bg-blue-700 py-2 px-4 items-center rounded ">Logout</button>
         </div>

    </div>
  )
}
