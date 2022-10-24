import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <Image
                style={{
                  height: "40px",
                  backgroundColor: "#ffffff",
                  padding: "10px",
                }}
                src="logo.png"
              ></Image>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex me-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="ms-auto my-2 my-lg-0" id="navLinks">
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                News
              </NavLink>
              <NavLink to="/destination">Destination</NavLink>
              <NavLink to="/blog">Blogs</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Button variant="btn btn-warning m-3">
                <Link className="text-decoration-none" to="/login">
                  Login
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
