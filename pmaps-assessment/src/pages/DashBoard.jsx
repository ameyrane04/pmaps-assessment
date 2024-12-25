import React from "react";

const Dashboard = () => {
  const user = localStorage.getItem("token"); // Decode JWT for real data

  return (
    <div className="min-h-screen flex flex-col bg-green-100">
      <header className="bg-green-700 text-white p-4 flex justify-between">
        <h1 className="text-xl">Dashboard</h1>
        <p>Hello, {user ? user.split("@")[0] : "User"}</p>
      </header>
      <main className="flex-grow p-6">
        <p>This is your dashboard.</p>
        {/* Add more static blocks here */}
      </main>
    </div>
  );
};

export default Dashboard;
