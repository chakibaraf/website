import { Navigate } from "react-router-dom"
import { accountService } from "../service/account.service"


type Props = {
    children: any;
 

}

/* a l'interieur du children j'ai le AdminRouter  */
/** fonction renvoie false utilisateur non connecté 
 * et la condition est vraie renvoi navigate
 * ----------------
 * si isLogged renvoie true utilisateur connecté
 *  donc condition fausse renvoie children */
const AuthGuard = ({ children }: Props) => {
    if(!accountService.isLogged()){
        return <Navigate to="/auth/login"/>
    }
 return children
}

    /*const AuthGuard = ({ children, role }: Props) => {
    if (user === undefined) {
        return <Navigate to="/" />
    }
    return children;
}

    const {user} = useUserContext();

    if (user !== undefined) {
        return <Navigate to="/auth/login" />

    } 
    
    return children;
}
*/
export default AuthGuard;