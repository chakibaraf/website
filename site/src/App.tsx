

import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthGuard from './helpers/AuthGuard';
import AdminRouter from './pages/admin/AdminRouter';
import AuthRouter from './pages/auth/AuthRouter';
import AuthUserRouter from './pages/auth/AuthUserRouter';


import { PublicRouter } from './pages/PublicRouter';
import UserRouter from './pages/user-prive-page/UserRouter';



function App() {
  return (

    <Fragment>
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<PublicRouter />
          } />
          <Route path='collection/*' element={
            <AuthGuard>
              <UserRouter />
            </AuthGuard>
          } />



          <Route path='admin/*' element={

            <AuthGuard>
              <AdminRouter />
            </AuthGuard>


          } />
          <Route path='/auth/*' element={<AuthRouter />} />

          <Route path='collection' element={<AuthUserRouter />} />

        </Routes>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
