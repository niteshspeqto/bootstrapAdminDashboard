import {  faCartShopping, faFolder, faLaughWink, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Sidebar.css';

const Sidebar=()=>{
  return (
    <div className="sidebar">
      <Navbar >
        <Container>
        <Navbar.Brand style={{color:"white"}}  href="#"> 
        <FontAwesomeIcon icon={faLaughWink} size="sm" style={{color: "#fff", paddingRight:"15px"}} />
        Admin App
        </Navbar.Brand>
        </Container>
        <hr />
      </Navbar>
      <br />
      <Navbar >
        <Container style={{borderBottom:"1px solid #6888E4"}}>
          <Navbar.Brand href="#" style={{color:"whitesmoke"}}>
          <FontAwesomeIcon icon={faLaughWink} size="sm" style={{color: "#fff", paddingRight:"15px"}} />
            Dashboard</Navbar.Brand>
        </Container>
      </Navbar>
      <br/>
      <Navbar >
        <Container style={{borderBottom:"1px solid #6888E4", padding:"15px"}}>
          <Navbar.Brand href="#" style={{color:"whitesmoke"}}>
          <FontAwesomeIcon icon={faFolder} size="sm" style={{color: "#fff", paddingRight:"15px"}} />
            Pages
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar >
        <Container>
        
          <Navbar.Brand href="#" style={{color:"whitesmoke"}}>
          <FontAwesomeIcon icon={faCartShopping} size="sm" style={{color: "#fff", paddingRight:"15px"}} />
            Ecommerce Store
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Sidebar;