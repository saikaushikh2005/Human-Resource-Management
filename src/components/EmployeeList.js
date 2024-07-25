import React from 'react';
import '../styles/EmployeeList.css';
import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';

const employeeData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@indusit.com',
    phone: '123-456-7890',
    role: 'FrontEnd Developer',
    department: 'IT',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@indusit.com',
    phone: '098-765-4321',
    role: 'BackEnd Developer',
    department: 'IT',
  },
  {
    id: 3,
    name: 'Samuel Johnson',
    email: 'samuel.johnson@indusit.com',
    phone: '567-890-1234',
    role: 'Full Stack Developer',
    department: 'IT',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@indusit.com',
    phone: '345-678-9012',
    role: 'Cyber Security Analyst',
    department: 'IT',
  },
  {
    id: 5,
    name: 'Michael White',
    email: 'michael.white@indusit.com',
    phone: '234-567-8901',
    role: 'Manager',
    department: 'IT',
  },
];

const EmployeeList = () => {
  return (
    <div className="employee-list-container">
    <Navbar />
    <div className="dashboard-content">
      <Sidebar />
      <h1 className="employee-list-header">Employee List</h1>
      <table className="employee-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.role}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default EmployeeList;
