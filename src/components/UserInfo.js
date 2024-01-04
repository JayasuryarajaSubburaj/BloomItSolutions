import React from 'react';
import { useParams } from 'react-router-dom';

function UserInfo() {
  const { email, password } = useParams();

  return (
    <div className="container mt-4">
      <h2>User Information</h2>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Password:</strong> {password}
      </div>
    </div>
  );
}

export default UserInfo;

