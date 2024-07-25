import React, { useState } from 'react';
import '../styles/LeaveApproval.css';
import '../styles/common/Sidebar.css';
import LogoImg from '../assets/Indus.jpg';

const LeaveApproval = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { 
      id: 1, 
      employeeName: 'John Doe', 
      position: 'Software Engineer', 
      department: 'IT', 
      leaveType: 'Annual Leave', 
      startDate: '2024-07-30', 
      endDate: '2024-08-02', 
      reason: 'Family vacation' 
    },
    { 
      id: 2, 
      employeeName: 'Jane Smith', 
      position: 'Product Manager', 
      department: 'Product', 
      leaveType: 'Sick Leave', 
      startDate: '2024-08-01', 
      endDate: '2024-08-05', 
      reason: 'Medical reasons' 
    }
  ]);

  const acceptLeave = (id) => {
    setLeaveRequests(leaveRequests.filter(request => request.id !== id));
    // Add logic to handle acceptance
  };

  const deleteLeave = (id) => {
    setLeaveRequests(leaveRequests.filter(request => request.id !== id));
    // Add logic to handle deletion
  };

  return (
    <div className="leave-approval-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><img src={LogoImg} alt="Indus Logo" className="logo-image" /></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#leave-approval">Leave Approval</a></li>
            <li><a href="#employee-list">Employee List</a></li>
            <li><a href="#create-employee">Create Employee</a></li>
            <li><a href="#performance">Performance</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Leave Approval</h1>
        <div className="leave-requests">
          {leaveRequests.map(request => (
            <div key={request.id} className="leave-request">
              <div className="request-details">
                <p>Employee Name: {request.employeeName}</p>
                <p>Position: {request.position}</p>
                <p>Start Date: {request.startDate}</p>
                <p>End Date: {request.endDate}</p>
                <p>Reason: {request.reason}</p>
              </div>
              <div className="request-actions">
                <button onClick={() => acceptLeave(request.id)} className="accept-button">Accept</button>
                <button onClick={() => deleteLeave(request.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LeaveApproval;
