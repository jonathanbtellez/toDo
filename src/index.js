import React from 'react';
import ReactDOM from 'react-dom/client';

//Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
//EStilos bootstrap

import 'bootstrap-icons/font/bootstrap-icons.css'
//Boostrap icons
//! Los estilos propios deben estar debajo de los estilos de bootstrap

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne/> */}
    {/* <AppRoutingFinal/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
