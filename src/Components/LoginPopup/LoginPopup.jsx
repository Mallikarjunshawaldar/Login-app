import React, { useState } from "react";
import "./LoginPopup.css"; // Ensure your CSS file is correctly styled

const LoginPopup = ({ setShowLogin }) => {
  const [isActive, setIsActive] = useState(false); // Track which form is active
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  // Mock data for demo purposes
  const mockUserData = {
    email: "test@example.com",
    password: "password123",
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    // Clear form data when switching to the login form
    setLoginEmail("");
    setLoginPassword("");
    setRegisterUsername("");
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterConfirmPassword("");
    setLoginError("");
    setRegisterError("");
    setLoginSuccess("");
    setRegisterSuccess("");
    setIsActive(false);
  };

  const handleCloseClick = () => {
    setShowLogin(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (
      loginEmail === mockUserData.email &&
      loginPassword === mockUserData.password
    ) {
      setLoginSuccess("Login successful!");
      setLoginError("");
    } else {
      setLoginError("Invalid email or password");
      setLoginSuccess("");
    }
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      setRegisterError("Passwords do not match");
      setRegisterSuccess("");
      return;
    }
    // Simulate successful registration
    setRegisterSuccess("Registration successful! Click 'Sign In' to log in.");
    setRegisterError("");
  };

  return (
    <>
      <div className="backdrop" onClick={handleCloseClick}></div>
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        <div
          className="form-container sign-in"
          style={{ display: isActive ? "none" : "block" }}
        >
          <form onSubmit={handleLoginSubmit}>
            <h1 className="h1">Sign In</h1>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Sign In</button>
            {loginSuccess && <p className="success">{loginSuccess}</p>}
            {loginError && <p className="error">{loginError}</p>}
            <a href="#">Forgot Password</a>
          </form>
        </div>

        <div
          className="form-container sign-up"
          style={{ display: isActive ? "block" : "none" }}
        >
          <form onSubmit={handleRegisterSubmit}>
            <h1 className="h1">Create Account</h1>
            <input
              type="text"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
              placeholder="User Name"
              required
            />
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <input
              type="password"
              value={registerConfirmPassword}
              onChange={(e) => setRegisterConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
            <button type="submit">Sign Up</button>
            {registerSuccess && <p className="success">{registerSuccess}</p>}
            {registerError && <p className="error">{registerError}</p>}
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Hello sir !</h1>
              <p>
                If you already register to our site please sign in with your
                details !
              </p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome</h1>
              <p>If your new user to our site please register first !</p>
              <button
                className="hidden"
                id="register"
                onClick={handleRegisterClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
