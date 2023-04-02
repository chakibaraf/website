import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ALayout } from "../admin/ALayout.1";
import { Dashboard } from "../admin/Dashboard";
import Erreur from "../Erreur";
import { UserEdit } from "./user/UserEdit";
import { accountService, getRole } from "../../service/account.service";

const AdminRouter = () => {
  const route = useNavigate();
  useEffect(() => {
    async function getRoleFunction(token: string) {
      try {
        const role = await getRole(token);
        if (role !== "admin") return route("/");
      } catch (error) {
        route("/");
      }
    }
    const token = accountService.getToken();
    if (!token || !token.length) return route("/");
    getRoleFunction(token);
  }, [route]);
  return (
    <Routes>
      <Route path="/" element={<ALayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user">
          <Route path="edit" element={<UserEdit />} />
        </Route>
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
