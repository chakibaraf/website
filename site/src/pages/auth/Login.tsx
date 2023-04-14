import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../service/account.service";
import LoginInscription from "./LoginInscription";
import { useSnackbar } from 'notistack';
import { FormGroupe } from "./LoginUser";

type LoginInputs = {
  password: string;
  nom: string;
  prenom: string;
  codeacces: string;
  email: string;
};

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();

  const [showInscription, setInscription] = useState(false);
  const { register, handleSubmit, reset } = useForm<LoginInputs>();

  const handleFormSubmit: SubmitHandler<LoginInputs> = async (data) => {
    accountService
      .login(data)
      .then((response) => {
        // Récupérer le rôle de l'utilisateur
        accountService.saveToken(response.data.access_token);
        // Stocker le rôle dans le Local Storage
        enqueueSnackbar('vous etes connecté avec succes', { variant: 'success' });
        navigate("/admin");
      })
      .catch((error) => {
        console.error(error);
        enqueueSnackbar('erreur d identification', { variant: 'error' });
      });
    reset();
  };

  const containerStyle =
    "h-full flex flex-col items-center justify-center gap-3 bg-gray-300";
  if (showInscription) return <div className={containerStyle}>
    <LoginInscription />
    <button
     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center"
     onClick={() => setInscription(false)}
     >
     Login
   </button>
  </div>

  return (
    <div className={containerStyle}>
      <h1 className="mt-40 text"> Portail Administrateur </h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col border mt-10 bg-gray-800  p-8 rounded-md"
      >
        <h1 className="text-white"> Formulaire de connexion</h1>
        <FormGroupe
          label="identification"
          name="email"
          register={register("email")}
          type="text"
        />
        <FormGroupe
          label="mot de passe"
          name="password"
          register={register("password")}
          type="password"
        />

        <div className="self-end">
          <button className="bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-2 text-white">
            connexion
          </button>
        </div>

      </form>
      <Switcher setInscription={setInscription} />


    </div>
  );
};
const Switcher = ({
  setInscription,
}: {
  setInscription: (value: boolean) => void;
}) => {
  return (
    <>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center"
      onClick={() => setInscription(true)}
      >
      Créer un nouveau administrateur
    </button>
    
     </>
     
  );
};


export default Login;
