import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://login-app-altn.onrender.com/login",
        { username, password }
      );

      if (response.status === 200) {
        localStorage.setItem("username", username);
        setLoggedIn(true);
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  if (loggedIn) {
    return (
      <div className="welcome-container">
        <h1>Welcome, {username} 👋</h1>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="title">Authority Login</h2>
        <p className="subtitle">Sign in to continue</p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

        </form>

        {error && <p className="error">{error}</p>}

      </div>
    </div>
  );
};

export default Login;