import {React, useState} from "react";
import './login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }

  return (
    <div className="container">
      <div className="login-container">
        <form className="login-form" action="/" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <div className="button-container">
            <a href = "/register" className="register-button">Register</a>
            <input type="submit" className="login-button" value="Login"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
