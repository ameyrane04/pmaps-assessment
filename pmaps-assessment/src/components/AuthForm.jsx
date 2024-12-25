import React, { useState } from "react";
import axios from "axios";

const AuthForm = ({ type, onSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = type === "Login" ? "/api/login" : "/api/register";
    try {
      const response = await axios.post(`http://localhost:8080${endpoint}`, formData);
      setMessage({ text: `${type} successful!`, type: "success" });
      if (type === "Login") {
        localStorage.setItem("token", response.data); // Save JWT
        onSuccess(); // Navigate to Dashboard
      }
    } catch (error) {
      setMessage({ text: error.response?.data || "Something went wrong!", type: "error" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">{type}</h2>
      {message.text && (
        <p className={`text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
          {message.text}
        </p>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        {type}
      </button>
    </form>
  );
};

export default AuthForm;
