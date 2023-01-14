import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './LoginButton';
import Card from 'react-bootstrap/Card';

function Login () {
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Log In</Card.Title>
      <Card.Text>
        Click Below to Log In
      </Card.Text>
      <LoginButton/>
    </Card.Body>
  </Card>
  )
}

export default Login;

