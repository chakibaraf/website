import { useEffect } from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import { Contact } from "../pages/Contact";
import { Apropos } from "../pages/Apropos";
import Erreur from "../pages/Erreur";
import { useNavigate } from "react-router-dom";

import NavbarMenu from "../layout/NavbarMenu";
import { accountService } from "../service/account.service";

export const PublicRouter = () => {
  const route = useNavigate();
  useEffect(() => {
    const token = accountService.getToken();
    if (token && token.length) return route("/collection/collection");
  }, [route]);
  return (
    <div>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />

        {/*<Route path='/collection' element={<Collections />} />*/}

        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Erreur />} />
      </Routes>
    </div>
  );
};
