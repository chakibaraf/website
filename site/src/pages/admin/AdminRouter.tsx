import React from 'react'
import { Routes, Route } from "react-router-dom"
import { ALayout } from "../admin/ALayout.1";
import { Dashboard } from "../admin/Dashboard";
import Erreur from '../Erreur';
import { UserEdit } from './user/UserEdit';

const AdminRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ALayout/>}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='user'>
                    <Route path="edit" element={<UserEdit/>}/>
                </Route>
                <Route path='*' element={<Erreur/>}/>
            </Route>
        </Routes>
    )
}

export default AdminRouter