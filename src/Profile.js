import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from 'react-bootstrap';
import './style/profile.css';
import backgroundImage from './images/backgroundChairs.jpg';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <body style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Card style={{ width: '18rem' }} id='profile-card'>
          <Card.Img variant="top" src={user.picture} alt={user.name} id='profile-img'/>
          <Card.Body>
            <Card.Title id='name'>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
          </Card.Body>
        </Card>
      </body>
    )
  );
};

export default Profile;
