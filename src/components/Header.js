import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login/LoginButton";
import LogoutButton from "./login/LogoutButton";

function Header() {
  const { isAuthenticated } = useAuth0();
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Makeup Products</Navbar.Brand>
    {isAuthenticated && <Link to='/'>Products</Link>}
    {isAuthenticated && <Link to='/profile'>Profile</Link>}
    <Link to='/about'>About Us</Link>
    {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
</Navbar>
  )
}

export default Header;