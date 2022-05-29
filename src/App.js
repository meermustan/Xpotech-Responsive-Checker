import React from 'react';
import Home from './pages/Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbar from './components/base/Navbar';

function App() {
  return (
      <div className="App" >
      
        <div style={{
          width: "100vw",
          background: "lightGreen",
          minHeight: "300px",
          textAlign: "center",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Home/>
          <Navbar />
        </div>
        
      </div>
  );
}

export default App;