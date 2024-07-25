import React from 'react';
import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';
import '../styles/Dashboard.css'; // Correct path to the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <h1>Welcome, HR</h1>
          <section>
            <h2>Employee Overview</h2>
            <p>Details about employees, their status, and more.</p>
            {/* Add more detailed features here */}
          </section>
          <section>
            <h2>Leave Requests</h2>
            <p>Overview of pending leave requests.</p>
            {/* Add more detailed features here */}
          </section>
          <section>
            <h2>Performance Metrics</h2>
            <p>Key performance indicators for employees.</p>
            {/* Add more detailed features here */}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
