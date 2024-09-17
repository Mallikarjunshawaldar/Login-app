import React, { useState } from "react";
import "./App.css";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setShowLogin] = useState(true); // Set initial state to true

  const handleLogin = () => {
    // Handle login success logic
    setShowLogin(false); // Optionally hide the popup after login
  };

  return (
    <div className="App">
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
