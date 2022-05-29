import React from "react";
import ReactDOM from "react-dom/client";
import './base.scss'
// import App from './App'
import Routes from './Routes'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
  <React.StrictMode >
    <Routes />
  </React.StrictMode>
);