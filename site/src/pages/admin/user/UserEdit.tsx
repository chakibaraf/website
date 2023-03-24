
import { useForm,SubmitHandler } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { userService } from "../../../service/user.service";



interface User {
  id: number;
  nom: string;
  prenom: string;
  code: string;
  password: string;
  email: string;
}

export const UserEdit = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [accessCode, setAccessCode] = useState<string>("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<User>();

    
    const handleAddUser: SubmitHandler<User> = async (data:User) => {
      userService.createUser(data)
          .then(response => {
            console.log(response.data)
            setUsers([...users, response.data]);
          })
          .catch(error => {
            console.error(error);
          })
        reset();
      }

  useEffect(()=>{
   userService.getAllUsers()
   .then(res => {
    console.log(res.data)
    setUsers(res.data)
   })
   .catch(err =>console.log(err))
  },[])


  const handleDeleteUser = (userId:number) => {
   userService.deleteUserById(userId)
   .then(()=> {
    console.log("supprimer avec succes")
    setUsers(users.filter(user => user.id !== userId));
   })
   .catch((error)=>{
    console.error(error)
   })

  };

  const handleAccessCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccessCode(event.target.value);
  };

  const handleDeleteAllUsers = () => {
    if (accessCode === "1234") {
      setUsers([]);
      setAccessCode("");
    } else {
      alert("Access denied.");
    }
  };

  return (
    <div >
      <h2 className="mt-10 ml-10">Ajout des utlisateurs </h2>
      <form className="sm:flex flex-raw border mt-10 bg-gray-800  items-center p-8  rounded-md text-white" onSubmit={handleSubmit(handleAddUser)}>
        <label className="text-white mr-10">
          nom:
          <input className="text-black" type="text" {...register("nom", { required: true })} />
          {errors.password && <span>requis</span>}
        </label>
        <label className="text-white mr-10">
          Prenom:
          <input className="text-black" type="text" {...register("prenom", { required: true })} />
          {errors.password && <span>requis</span>}
        </label>
        <label className="text-white mr-10">
          Code:
          <input className="text-black" type="text" {...register("code", { required: true })} />
          {errors.code && <span>requis</span>}
        </label>
        <label className="text-white mr-10">
          Email:
          <input className="text-black" type="text" {...register("email", { required: true })} />
          {errors.code && <span>requis</span>}
        </label>
        <br />
        <label className="text-white mr-10">
          Password:
          <input className="text-black" type="text" {...register("password", { required: true })} />
          {errors.password && <span>requis</span>}
        </label>
        <br />
        <button className="bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-2" type="submit">Ajout utilisateur </button>
      </form>

      <h2 className="ml-10">Liste des utilisateurs </h2>
      <div className="flex flex-cols border mt-10 bg-gray-800  items-center p-8 rounded-md text-white">



        <ul className="flex sm:flex-row">
          <li className="  mr-10" >ID</li>
          <li className=" mr-10">prenom</li>
          <li className="mr-10" >Code</li>
          <li className="mr-20">email</li>
          <li className="mr-10" >Password</li>

        </ul>
      </div>
      <div className="flex flex-cols border   items-center p-8 rounded-md text-black" >
        {users.map((user) => (
           <ul className=" "  key={user.id}>
          <li className=" mr-10 text-red-500 ">id:{user.id}</li>
           
            <li className="mr-10 text-red-500">nom: {user.nom}</li>
            <li className="mr-10 text-red-500">prenom: {user.prenom}</li>
            <li className="mr-10 text-green-500">{user.code}</li>
            <li className="mr-10 text-green-500">email:{user.email}</li>
            <li className="mr-10 text-green-500">mp:{user.password}</li>
            
              <button className="bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-2" type="button" onClick={() => handleDeleteUser(user.id)}>
                Delete
              </button>
          
          </ul>
        ))}
      </div>
      <br />
      <h2 className="ml-10 mt-10">Supprimer tous les utilisateur </h2>
      <label className="ml-10">
        Access Code:
        <input className="border mt-10" type="password" value={accessCode} onChange={handleAccessCodeChange} />
      </label>
      <br />
      <button className="bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-10 ml-10 " type="button" onClick={handleDeleteAllUsers}>
        supprimer
      </button>
    </div>
  );
};

