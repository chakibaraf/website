

import { SubmitHandler, useForm } from 'react-hook-form'

import { accountService } from '../../service/account.service';
import { useSnackbar } from 'notistack';
import { FormGroupe } from "./LoginUser";

type AdminInscription = {
    password: string
    nom: string;
    prenom: string;
    email: string;
    codeacces: string;
  }
const LoginInscription = () => {
  const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, reset } = useForm<AdminInscription>()
   
    const handleFormInscriptionSubmit: SubmitHandler<AdminInscription> = async (data) => {
    
      accountService.inscription(data)
          .then(response => {
            enqueueSnackbar('nouvel admnistrateur crée', { variant: 'success' });
            console.log(response.data)
          })
          .catch(error => {
            enqueueSnackbar('erreur lors de l inscription', { variant: 'error' });
            console.error(error);
          })
        reset();
      }
    
  return (
    <div>
        <form onSubmit={handleSubmit(handleFormInscriptionSubmit)} className='flex flex-col border bg-gray-800  items-center p-8 rounded-md'>
          <h1 className='text-white'> Formulaire d'inscription</h1>
         
          <FormGroupe
          label="code acces"
          name="codeacces"
          register={register("codeacces")}
          type="text"/>
            <FormGroupe
          label="Nom"
          name="nom"
          register={register("nom")}
          type="text"/>
          
          <FormGroupe
          label="Prenom"
          name="prenom"
          register={register("prenom")}
          type="text"/>
         
         <FormGroupe
          label="Email"
          name="email"
          register={register("email")}
          type="text"/>
          
          <FormGroupe
          label="Password"
          name="password"
          register={register("password")}
          type="text"/>
          
          <div>
            <button className='bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-2 text-white'>Inscription</button>
          </div>
        </form>
       
    </div>
  )
}

export default LoginInscription