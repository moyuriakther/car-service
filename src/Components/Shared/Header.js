import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo-black.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogOut = () => {
    signOut(auth).then(() => {
      console.log("sign out");
    });
  };
  // console.log(user);
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      id="navbar"
      bg="primary"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img height="30px " src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
          </Nav>
          <Nav>
            {user && (
              <>
                <Link to="/addservice">Add Service</Link>
                <Link to="/manage">Manage Services</Link>
                <Link to="/orders">Orders</Link>
              </>
            )}
            {user?.uid ? (
              <Link to="/" onClick={handleLogOut}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
