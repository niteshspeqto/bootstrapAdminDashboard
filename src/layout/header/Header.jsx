import {
  faBell,
  faEnvelope,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import { Button, Form } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container className="header-container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto header-navs">
            <Nav className="header-left">
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Search for..."
                  className="mr-sm-2 search-input"
                />
                <Button variant="primary" className="header-search-icon" >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: "#ffffff" }}
                  />
                </Button>
              </Form>
            </Nav>
            <Nav className="header-right">
              <Nav.Item>
                <FontAwesomeIcon icon={faBell} size="lg" />
              </Nav.Item>
              <Nav.Item>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </Nav.Item>
              <Nav.Item>User Name</Nav.Item>
              <Nav.Item>
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Nav.Item>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
