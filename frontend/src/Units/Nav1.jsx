import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <div style={{border:'1px solid'}}> 
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">@MUH SALIH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <NavDropdown title="Add Item" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Location</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Current Status</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Spouse</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              Link
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;