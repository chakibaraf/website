import Axios from "./caller.service"
/**fonction qui permet de stocker le token dans un 
 * localstorage
 */

/****service pour login */
let login = (data: {
    password: string
    nom: string;
    prenom: string;
    codeacces: string;
    email: string;
  
}) => {
    return Axios.post('auth/login',data)
}

/**service pour login user  */
let loginUser = (data: {
    password: string
    nom: string;
    prenom: string;
    codeacces: string;
    email: string;
  
}) => {
    return Axios.post('auth/collection ',data)
}
/********************************************* */
/**service pour inscription  */
let inscription = (data: {
    password: string
    nom: string;
    prenom: string;
    codeacces: string;
    email: string;
}) => {
    return Axios.post('admins', data)
}

/******************************* */
let saveToken = (token: string) => {
    localStorage.setItem("token", token)
}

/**sauvegarde du token admin */
let saveAdminToken = (token: string) => {
    localStorage.setItem("token", token)
}

/**sauvegarde du toke user */
let saveUserToken = (token: string) => {
    localStorage.setItem("token", token)
}

/**fonction  qui permet de se deconnecter de la session en supprimant 
 * le token
 */
let logout = () => {
    localStorage.removeItem("token")
}

/**fonction qui permet de se connecter avec le token
 * 
  */
/**recupere la valeur du token avec la methode get renvoi "token" 
 * renvoie boolean !!pour convertir token en boolean
*/
let isLogged = () => {
    let token = localStorage.getItem("token")
    return !!token
}
/*
let isLoggedUser = () => {
    let token = localStorage.getItem("token")
    return !!token
}*/

/**Si token est null, !!token renverra false. 
 * Sinon, !!token renverra true. */

/**fonction  */
let getToken = () => {
    return localStorage.getItem('token')
}
let getUserRole = () =>{
    return localStorage.getItem('role') ?? ''; // Récupérer le rôle à partir du Local Storage
}
let hasRole = (role: string): boolean =>{
    const userRoles = JSON.parse(localStorage.getItem('role') || '[]') as string[];
    return userRoles.includes(role);
  }


export const accountService = {
    login,
    loginUser,
    inscription,
    saveToken,
    saveUserToken,
    saveAdminToken,
    logout,
    isLogged,
    getToken,
    getUserRole,
   hasRole
}