// src/components/CreateUser.js
import React, { useState } from 'react';
import '../styles/CreateUser.css';
import '../styles/common/Sidebar.css';
import '../styles/common/Alert.css';
import LogoImg from '../assets/Indus.jpg';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    role: ''
  });
  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.role) newErrors.role = 'Role is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (formData.role === 'Manager') {
      setAlertMessage('A new Manager is created');
    } else {
      setAlertMessage('A new user is added');
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      role: ''
    });
    setErrors({});
  };

  return (
    <div className='create-user-container'>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><img src={LogoImg} alt="Indus Logo" className="logo-image" /></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/leave-approval">Leave Approval</a></li>
            <li><a href="/employee-list">Employee List</a></li>
            <li><a href="/create-employee">Create Employee</a></li>
            <li><a href="/performance">Performance</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input 
              type='text' 
              name='name' 
              value={formData.name} 
              onChange={handleChange} 
            />
            {errors.name && <span className='error'>{errors.name}</span>}
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input 
              type='email' 
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
            />
            {errors.email && <span className='error'>{errors.email}</span>}
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input 
              type='phone' 
              name='phone' 
              value={formData.phone} 
              onChange={handleChange} 
            />
            {errors.phone && <span className='error'>{errors.phone}</span>}
          </div>
          <div className='form-group'>
            <label>Username</label>
            <input 
              type='text' 
              name='username' 
              value={formData.username} 
              onChange={handleChange} 
            />
            {errors.username && <span className='error'>{errors.username}</span>}
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input 
              type='password' 
              name='password' 
              value={formData.password} 
              onChange={handleChange} 
            />
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>
          <div className='form-group'>
            <label>Role</label>
            <select 
              name='role' 
              value={formData.role} 
              onChange={handleChange}
            >
              <option value=''>Select Role</option>
              <option value='FrontEnd'>FrontEnd</option>
              <option value='BackEnd'>BackEnd</option>
              <option value='Full Stack'>Full Stack</option>
              <option value='Manager'>Manager</option>
              <option value='Cyber Security'>Cyber Security</option>
            </select>
            {errors.role && <span className='error'>{errors.role}</span>}
          </div>
          <button type='submit'>Create</button>
        </form>
        {showAlert && <div className={`alert show`}>{alertMessage}</div>}
      </main>
    </div>
  );
};

export default CreateUser;
