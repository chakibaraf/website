import Axios from "./caller.service";


const getAllUsers = () => {
    return Axios.get('/users')
}



const getUserById = (id:number) => {
    return Axios.get(`/users/${id}`)
  }
  
  // Supprime un utilisateur par son ID
  const deleteUserById = (id:any) => {
    return Axios.delete(`/users/${id}`)
  

  }
  const createUser = (userData:any) => {
    return Axios.post('/users', userData)
  }

export const userService = {
  createUser, getAllUsers, deleteUserById, getUserById
}