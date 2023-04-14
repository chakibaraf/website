
import { useForm,SubmitHandler } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { userService } from "../../../service/user.service";



interface User {
  id: number;
  nom: string;
  prenom: string;
  codecas: string;
  password: string;
  email: string;
}

export const UserEdit = () => {

  const [users, setUsers] = useState<User[]>([]);


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


  const containerStyle = 
  "h-full flex flex-col items-center justify-center gap-3 bg-gray-300 ";
const secContainerStyle = 
"grid grid-cols-5 xs:grid-cols-2 gap-8 border-spacing-2 p-20";

return (
    <div className={containerStyle}>
      <h2 className="mt-10 ml-10 font-semibold">Ajout des utlisateurs </h2>
      <form className="sm:flex flex-raw border mt-10 bg-gray-800  items-center p-8  rounded-md text-white" onSubmit={handleSubmit(handleAddUser)}>
        <label className="text-white mr-10">
          nom:
          <input className="text-black rounded-md" type="text" {...register("nom", { required: true })} />
          {errors.password && <span>requis</span>}
        </label>
        <label className="text-white mr-10">
          Prenom:
          <input className="text-black rounded-md" type="text" {...register("prenom", { required: true })} />
          {errors.password && <span>requis</span>}
        </label>
        <label className="text-white mr-10">
          Email:
          <input className="text-black rounded-md" type="text" {...register("email", { required: true })} />
          {errors.email && <span>requis</span>}
        </label>
        <label className="text-white mr-10">
          Password *:
          <input className="text-black rounded-md" type="text" {...register("codecas", { required: true })} />
          {errors.codecas && <span>requis</span>}
        </label>
        <br />
        <label className="text-white mr-10">
          Password:
          <input className="text-black rounded-md" type="text" {...register("password", { required: true })} />
          {errors.password && <span>requis</span>}
        </label>
        <br />
        <button className="bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-2" type="submit">Ajout utilisateur </button>
      </form>

      <h2 className="ml-10 font-semibold">Liste des utilisateurs </h2>
      <div className="flex flex-cols border mt-10 bg-gray-800  items-center p-8 rounded-md text-white">



        <ul className="flex sm:flex-row">

        <li className="mr-10" >Nom</li>
          <li className=" mr-10">Prenom</li>
          <li className="mr-20">Email</li>
          
          <li className="mr-10" >Password</li>

        </ul>
      </div>
      
      <div className={secContainerStyle} >
        {users.map((user) => (
           <ul className=" "  key={user.id}>
         
            <li className="mr-10 text-red-500">nom:{user.nom}</li>
            <li className="mr-10 text-red-500">prenom:{user.prenom}</li>
            <li className="mr-10 text-green-500">password:{user.codecas}</li>
            <li className="mr-10 text-green-500">mail:{user.email}</li>
           
            
              <button className="bg-gray-500 hover:bg-blue-700 py-2 px-4 rounded mt-2" type="button" onClick={() => handleDeleteUser(user.id)}>
                Delete
              </button>
          
          </ul>
        ))}
      </div>
      <br />
     
    </div>
  );
};

