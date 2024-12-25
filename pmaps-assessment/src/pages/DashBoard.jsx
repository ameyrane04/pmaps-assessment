import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faVideo, faPhone, faCamera, faAmbulance, faMessage, faRobot, faBox, faBook, faHandshake, faCalendar, faGamepad, } from '@fortawesome/free-solid-svg-icons';
import {faPerson, faEnvelope, faPersonArrowUpFromLine, faInfoCircle, faUserGroup, faLocationDot, faHome, faSearch, faBars  } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { iconName } from "@fortawesome/free-solid-svg-icons/fa0";

const Dashboard = () => {
  const [activeIcon, setActiveIcon] = useState('home');

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let userEmail = "User";
  if(token){
    try{
      const decodedToken = jwtDecode(token);
      console.log(decodedToken)
      userEmail = decodedToken.sub.split("@")[0] || "User";

    }catch(error){
      console.log("Error decoding token:", error);
    }
  }

  const NavIcon = ({ icon, name }) => (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${
        activeIcon === name ? 'bg-white' : ''
      }`}
      onClick={() => setActiveIcon(name)}
    >
      <FontAwesomeIcon 
        icon={icon}
        className={`text-2xl ${activeIcon === name ? 'text-green-700' : 'text-white'}`}
      />
    </div>
  );

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT
    navigate("/"); // Redirect to login/signup
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50 pb-20">
      <header className="bg-green-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <p>Hello, {userEmail}</p>
          <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-sm" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="flex-grow p-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Quick Access</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-4 gap-6 px-12">
          {[faBell, faCamera, faPhone, faVideo, faMessage, faRobot, faBox, faAmbulance, faBook, faHandshake, faCalendar, faGamepad].map((icon, index) => (
            <div key={index} className="bg-green-700 p-6 rounded-lg flex justify-center items-center aspect-square">
              <FontAwesomeIcon icon={icon} className="text-white text-3xl" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center my-12">
          <div className="flex-grow h-px bg-gray-300 max-w-xs"></div>
          <button className="mx-4 px-6 py-2 text-green-700 flex items-center">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Help Me
          </button>
          <div className="flex-grow h-px bg-gray-300 max-w-xs"></div>
        </div>

        <div className="flex flex-col items-center gap-4 mb-16">
          <button className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-full w-48">
            <FontAwesomeIcon icon={faPerson} className="mr-2" />My Account
          </button>
          <button className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-full w-48">
            <FontAwesomeIcon icon={faPersonArrowUpFromLine} className="mr-2" />Personal Info
          </button>
          <button className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-full w-48">
            <FontAwesomeIcon icon={faUserGroup} className="mr-2" />Emergency Contact
          </button>
          <button className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-full w-48">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />About
          </button>
          <button className="bg-white border border-green-700 text-green-700 px-6 py-2 rounded-full w-48">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />Contact Us
          </button>
        </div>

        <div className="fixed bottom-24 right-8">
          <button className="bg-yellow-500 text-white w-16 h-16 rounded-full text-xl font-bold flex items-center justify-center">
            SOS
          </button>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-green-700 text-white py-4">
          <div className="flex justify-around items-center">
          <NavIcon icon={faHome} name="home" />
          <NavIcon icon={faSearch} name="search" />
          <NavIcon icon={faLocationDot} name="location" />
          <NavIcon icon={faBars} name="menu" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
