import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from '../../../images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Header.css';

const Header = () => {
    return (
        <Navbar style={{background: 'linear-gradient(to right, #0033cc 0%, #cc0099 100%)',}}   expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>
            <img className='nav-logo' src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-item text-white">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Catagories</Nav.Link>
            <Nav.Link as={Link} to="/my-reviews">My Order</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
          {/* <Nav >
            {
              user?.uid ?
                <button className='log-out' onClick={logOut}>Log Out</button>
              :
              <>
                <Nav.Link className='nav-btn ' as={Link} to="/login"><Button className='text-btn' variant="outline-dark">Login</Button></Nav.Link>
                <Nav.Link className='nav-btn' as={Link} to="/register"><Button className='text-btn' variant="outline-dark">Register</Button></Nav.Link>
              </>
            }
          </Nav>
          <Nav>
            <div className='user-img'><OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{user?.displayName}</Tooltip>}>
            <Nav.Link >{user?.photoURL ?
              <Image style={{height:'30px'}} roundedCircle 
              src={user.photoURL}></Image>
              : <FaUser></FaUser>
            }</Nav.Link>
          </OverlayTrigger></div>
            
          </Nav> */}
        </Navbar.Collapse>
      </Container>
        </Navbar>
    );
};

export default Header;