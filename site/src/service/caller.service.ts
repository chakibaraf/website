import axios from "axios";
//import { accountService } from "./account.service";

/** permet de faciler la mise a jour de la base url
 * et import
 */
export const baseURL = "http://localhost:8080";
const Axios = axios.create({
  baseURL,
});

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
export default Axios;
