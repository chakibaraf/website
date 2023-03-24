import axios from "axios";
//import { accountService } from "./account.service";

/** permet de faciler la mise a jour de la base url 
 * et import
 */

const Axios = axios.create({
    baseURL:"http://localhost:3001"
})

/**
 * 
 * intercepteur pour le token
 */
/*
Axios.interceptors.request.use(request => {
    
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer'+accountService.getToken
    }
    
    return request

})
*/
export default Axios ;