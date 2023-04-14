
import { Routes, Route } from "react-router-dom"
import CLayout from './CLayout';

import Erreur from '../Erreur';
import  {Collections} from '../Collections';

const UserRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<CLayout/>}>
                <Route path='collections' element={<Collections />} />
                
                <Route path='*' element={<Erreur/>}/>
            </Route>
        </Routes>
    )
}

export default UserRouter