// src/routes/App.tsx
import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm.tsx";
import SignUpForm from "../components/forms/SignUpForm.tsx";

// Styles for the buttons
const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "10px 20px",
  fontSize: "16px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
  cursor: "pointer",
  transition: "all 0.2s ease",
  marginRight: "10px",
};

const buttonHoverStyle = {
  backgroundColor: "#0056b3",
};

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Buttons for navigation */}
      <div
        style={{
          marginBottom: "20px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={() => navigate("/login")}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Sign Up
        </button>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
