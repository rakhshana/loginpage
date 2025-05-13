import React from 'react';
import { useState } from 'react';
import '../styles.css';

function Login(){
     const [userId, setUserId] = useState("");
      const [password, setPassword] = useState("");
    
      const handleLogin = (e) => {
        e.preventDefault();
    
        const correctUserId = "admin";
        const correctPassword = "1234";
    
        if (userId === correctUserId && password === correctPassword) {
          alert("You've logged in!");
        } else {
          alert("Invalid user ID or password");
        }
      };
    
      return (
        <div className="container">
          <form onSubmit={handleLogin} className="form-card">
            <h2 className='form-heading'>Login</h2>
            <div className="input-group">
              <label>User ID:   </label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="input-group">
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <button type="submit" className='submit-btn'>Login</button>
          </form>
        </div>
      );
    }
export default Login;