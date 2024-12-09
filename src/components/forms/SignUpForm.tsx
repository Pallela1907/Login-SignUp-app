import React, { useState } from "react";

const evaluatePasswordStrength = (password: string) => {
  let strength = 0;

  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/\d/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  switch (strength) {
    case 4:
      return "Strong";
    case 3:
      return "Good";
    case 2:
      return "Weak";
    default:
      return "Very Weak";
  }
};

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(evaluatePasswordStrength(value));
  };

  const handleSignUp = () => {
    const usersData = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = usersData.some((user: any) => user.email === email);

    if (userExists) {
      setSuccessMessage("User already exists!");
      return;
    }

    const newUser = { email, password };
    usersData.push(newUser);

    localStorage.setItem("users", JSON.stringify(usersData));
    setSuccessMessage("User Registered Successfully!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <input
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginBottom: "10px", padding: "10px", width: "100%" }}
      />
      <p style={{ color: passwordStrength === "Strong" ? "green" : "red" }}>
        Password Strength: {passwordStrength}
      </p>
      <button
        onClick={handleSignUp}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default SignUpForm;
