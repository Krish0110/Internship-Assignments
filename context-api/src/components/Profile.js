/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div>
      Profile: {user.username}
    </div>
  );
}

export default Profile;
