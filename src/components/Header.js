import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return(
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Makeup Products</Navbar.Brand>
    <Link to='/'>Products</Link>
    <Link to='/about'>About Us</Link>
</Navbar>
  )
}

export default Header;