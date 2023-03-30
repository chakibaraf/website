import React from 'react'
import Home from '../pages/Home';
import { Routes, Route} from 'react-router-dom';
import { Contact } from '../pages/Contact';
import { Apropos } from '../pages/Apropos';
import Erreur from '../pages/Erreur';




import NavbarMenu from '../layout/NavbarMenu';



export const PublicRouter = () => {
    return (
        <div>
            <NavbarMenu />
            <Routes>
                <Route path='/' element={<Home />} />

                {/*<Route path='/collection' element={<Collections />} />*/}

                <Route path='/apropos' element={<Apropos />} />
                <Route path='/contact' element={<Contact />} />
               


                <Route path="*" element={<Erreur />} />
            </Routes>

        </div>
    )
}
