import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { accountService } from '../../service/account.service';


type AdminInscription = {
    password: string
    nom: string;
    prenom: string;
    email: string;
    codeacces: string;
  }
const LoginInscription = () => {
    const { register, handleSubmit, reset } = useForm<AdminInscription>()
    const handleFormInscriptionSubmit: SubmitHandler<AdminInscription> = async (data) => {
      accountService.inscription(data)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.error(error);
          })
        reset();
      }
    
  return (
    <div>
        <form onSubmit={handleSubmit(handleFormInscriptionSubmit)} className='flex flex-col border bg-gray-800  items-center p-8 rounded-md'>
          <h1 className='text-white'> Formulaire d'inscription</h1>
          <div className='flex flex-col items-center'>
            <label htmlFor="name" className='mb-2 text-white'>codeacces</label>
            <input {...register('codeacces')} type="text" name='codeacces' />
          </div>
          <div className='flex flex-col items-center'>
            <label htmlFor="name" className='mb-2 text-white'>Nom</label>
            <input {...register('nom')} type="text" name='name' />
          </div>
          <div className='flex flex-col items-center'>
            <label htmlFor="name" className='mb-2 text-white'>Prenom</label>
            <input {...register('prenom')} type="text" name='prenom' />
          </div>
          <div className='flex flex-col items-center'>
            <label htmlFor="email" className='mb-2 text-white'>Email</label>
            <input {...register('email')} type="email" name='email' />
          </div>
          <div className='flex flex-col items-center'>
            <label htmlFor="password" className='mb-2 text-white'>mot de passe</label>
            <input {...register('password')} type="password" name='password' />
          </div>
          <div>
            <button className='bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-2 text-white'>Inscription</button>
          </div>
        </form>
       
    </div>
  )
}

export default LoginInscription