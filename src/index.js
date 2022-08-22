import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import A from './routes/A';
import B from './routes/B';
import C from './routes/C';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<A />}/>
        <Route path="menu-b" element={<B />}/>
        <Route path="menu-c" element={<C />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);