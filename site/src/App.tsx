

import { Fragment } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AuthGuard from './helpers/AuthGuard';
import AdminRouter from './pages/admin/AdminRouter';
import AuthRouter from './pages/auth/AuthRouter';




import { PublicRouter } from './pages/PublicRouter';



function App() {
  return (

    <Fragment>
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<PublicRouter />}/>
          <Route path='/admin/*' element={
            <AuthGuard>
            <AdminRouter/>
          </AuthGuard>
          }/>
          
          <Route path='/auth/*' element={<AuthRouter/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
