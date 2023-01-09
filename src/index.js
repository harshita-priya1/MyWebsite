import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/Header/Header-components/About';
import Contact from './components/Header/Header-components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
  </BrowserRouter>
);

