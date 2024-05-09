import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

import {
  faSearch,
  faBell,
  faEnvelope,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
      <Form className="header-left">
        <Form.Control
          type="text"
          placeholder="Search for..."
          className="mr-sm-2 search-input"
        />
        <Button variant="primary" className="search-button">
          <FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff" }} />
        </Button>
      </Form>
      <div className="header-right">
        <div>
          <FontAwesomeIcon icon={faBell} style={{cursor:"pointer", color: "#c2c4c7" }} />
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} style={{cursor:"pointer", color: "#C2C4C7" }} />
        </div>
        <div style={{ borderRight: "1px solid #C2C4C7", height:"40px" }}></div>
        <div className="user-corner-header">
          <div>Douglas McGee</div>
        </div>
        <div className="user-pic">
          <FontAwesomeIcon icon={faUserCircle} size="lg" style={{cursor:"pointer", color: "#000" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
