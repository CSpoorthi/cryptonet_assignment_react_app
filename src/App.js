// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        'https://randomuser.me/api/?page=1&results=1&seed=abc'
      );
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (

    <div className="container">
      {userData && (
        <div className="profile-card">
          <div className="profile-image">
            <img
              src={userData.picture.large}
              alt={`${userData.name.first} ${userData.name.last}`}
            />
          </div>
          <div className="profile-details">
            <p className="name">
              {userData.name.title} {userData.name.first} {userData.name.last}
            </p>
            <div className="contact-item">
                <span>{userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)}</span>
              </div>
            <div className="contact-info">
              <div className="contact-item">
                <img src="/images/phone_logo.png" alt="Phone Icon" />
                <span>{userData.phone}</span>
              </div>
              <div className="contact-item">
                <img src="/images/email_logo.png" alt="Email Icon" />
                <span>{userData.email}</span>
              </div>
              <div className="contact-item">
                <img src="/images/location_logo.jpg" alt="Location Icon" />
                <span>
                  {userData.location.street.number} {userData.location.street.name},<br />
                  {userData.location.city}, {userData.location.state},<br />
                  {userData.location.country}, {userData.location.postcode}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
