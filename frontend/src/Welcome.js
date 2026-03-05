import React from "react";

const Welcome = () => {
  const username = localStorage.getItem("username") || "User";
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>Welcome, {username}!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Welcome;