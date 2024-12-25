import React, { useState } from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [authType, setAuthType] = useState("Login");
  const navigate = useNavigate();

  const toggleAuthType = () => {
    setAuthType(authType === "Login" ? "Sign Up" : "Login");
  };

  const handleSuccess = () => {
    navigate("/dashboard"); // Navigate to Dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">Welcome to PMAPS</h1>
        <p className="text-gray-600">{authType} to continue</p>
      </div>
      <AuthForm type={authType} onSuccess={handleSuccess} />
      <button
        onClick={toggleAuthType}
        className="mt-4 text-sm text-green-600 hover:underline"
      >
        {authType === "Login" ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default LoginPage;
