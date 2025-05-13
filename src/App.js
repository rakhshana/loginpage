
import React from 'react';
import { useState } from 'react';
import Login from './components/login';
import Signup from './components/Signup';
import './styles.css';

function App() {
  const [showLogin,setShowlogin]=useState(true);

 return (

    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={() => setShowlogin(true)} className='click-btn'>Login</button>
        
        <button onClick={() => setShowlogin(false)} className='click-btn'>Signup</button>
       
      </div>

      {showLogin ? <Login /> : <Signup />}
    </div>
  );
}
export default App;
