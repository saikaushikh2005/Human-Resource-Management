// src/components/common/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/common/Navbar.css'; // Corrected path to the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/leave-approval">Leave Approval</NavLink></li>
        <li><NavLink to="/employee-list">Employee List</NavLink></li>
        <li><NavLink to="/create-employee">Create Employee</NavLink></li>
        <li><NavLink to="/performance">Performance</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
