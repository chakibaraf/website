import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../service/account.service";
import LoginInscription from "./LoginInscription";

type LoginInputs = {
  password: string;
  nom: string;
  prenom: string;
  codeacces: string;
  email: string;
};

const Login = () => {
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

        navigate("/admin");
      })
      .catch((error) => {
        console.error(error);
      });
    reset();
  };

  return (
    <>
      <h1 className="mt-40"> Portail Administrateur </h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col border mt-40 bg-gray-800  items-center p-8 rounded-md"
      >
        <h1 className="text-white"> Formulaire de connexion</h1>
        <div className="flex flex-col items-center">
          <label htmlFor="login" className="mb-2 text-white">
            identification{" "}
          </label>
          <input {...register("email")} type="text" name="email" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="password" className="mb-2 text-white">
            mot de passe
          </label>
          <input {...register("password")} type="password" name="password" />
        </div>
        <div>
          <button className="bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-2 text-white">
            connexion
          </button>
        </div>
      </form>

      <div></div>
      {showInscription ? (
        <LoginInscription />
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center"
          onClick={() => setInscription(true)}
        >
          Créer un nouveau administrateur
        </button>
      )}
    </>
  );
};

export default Login;
