import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import '../SSO/SSO_Dashboard.css';

const AdviserDashboard = () => {
  // Access location state to get userInfo
  const location = useLocation();
  const userInfo = location.state ? location.state.userInfo : null;
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality, e.g., clear tokens
    localStorage.removeItem('authToken');
    // Then navigate to the login page
    navigate('/');
  };

  return (
    <div className='wrapper'>
      <div className="sidenav">
        {/* Navigation links */}
        <Link to="/report">Report</Link>
        <Link to="/student">Students</Link>
        <button onClick={handleLogout}>
            <span>Logout</span>
          </button>
      </div>
      <div className='content'>
        <h1>Adviser Dashboard</h1>
        {/* Display first name and last name if userInfo is available */}
        {userInfo && (
          <h2>Welcome, {userInfo.firstname} {userInfo.lastname}!</h2>
        )}
        {/* Content */}
      </div>
    </div>
  );
}

export default AdviserDashboard;