import React, { Fragment } from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Collections } from './pages/Collections';
import { Contact } from './pages/Contact';
import { Apropos } from './pages/Apropos';

import './App.css';
import { Gallerie } from './components/Gallerie';
import NavbarMenu from './layout/NavbarMenu';



function App() {
  return (

    <Fragment>
      <BrowserRouter>
      <NavbarMenu/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/apropos' element={<Apropos />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/collections' element={<Gallerie />} />
        </Routes>
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
