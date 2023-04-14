import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { accountService } from "../../service/account.service";
import { useSnackbar } from 'notistack';

type LoginInputs = {
  password: string;
  nom: string;
  prenom: string;
  codeacces: string;
  email: string;
};

const LoginUser = () => {
  let navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();

  const { register, handleSubmit, reset } = useForm<LoginInputs>();

  const handleFormSubmit: SubmitHandler<LoginInputs> = async (data) => {
    accountService
      .loginUser(data)
      .then((response) => {
        accountService.saveUserToken(response.data.access_token);
        enqueueSnackbar('vous etes connecté avec succes', {variant: 'success'});
        navigate("collection");
      })
      .catch((error) => {
        enqueueSnackbar('erreur d identification', {variant: 'error'});
        console.error(error);
      });
    reset();
  };
  const containerStyle =
    "h-full flex flex-col items-center justify-center gap-3 bg-gray-300";

  return (
    <div className={containerStyle}>
      <h1> veuillez vous connecter pour voir la collection </h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col border bg-gray-800 p-8 rounded-md"
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
    </div>
  );
};

type FormUi = {
  register: any;
  label: string;
  type: string;
  name: string;
};

export const FormGroupe = ({ label, type, name, register }: FormUi) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white">{label}</label>
      <input
        className="outline-none py-1 pl-2 rounded-md text-md font-bold"
        {...register}
        type={type}
        name={name}
      />
    </div>
  );
};


export default LoginUser;
