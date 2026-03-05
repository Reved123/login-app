import "./Login.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://login-backend-51mx.onrender.com", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("username", username);
        navigate("/welcome");
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="saas-container">
      <div className="saas-left">
        <h1>LOGIN</h1>
        <p>Secure. Reliable. Scalable.</p>
      </div>
  
      <div className="saas-right">
        <div className="login-card">
          <h2>Sign in</h2>
          <p className="login-subtitle">
            Welcome back! Please enter your details.
          </p>
  
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
  
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
  
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
  
          {error && <p className="error-text">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;