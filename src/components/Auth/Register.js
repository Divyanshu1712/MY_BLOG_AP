import React, { useState } from 'react';
import { register } from '../../services/api';
import '../../styles/main.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
