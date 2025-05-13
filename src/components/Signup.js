import { useState } from "react";
import React from 'react';
import '../styles.css';

function Signup(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [phoneno,setPhoneno]=useState("");
    
    const handleSignup=(e)=>{
        e.preventDefault();
    alert(`Signed up successfully!\nUsername: ${username}\nEmail: ${email}\nPhone: ${phoneno}`);
};
return (
    <div className="container">
      <form onSubmit={handleSignup} className="form-card">
        <h2 className="form-heading">Signup</h2>

        <div className="input-group">
          <label>Username: </label>
          <input
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Phone Number: </label>
          <input
            type="tel"
            value={phoneno}
            required
            onChange={(e) => setPhoneno(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );

}
export default Signup;