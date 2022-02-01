import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Navbar0 = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <img
          src="https://media.istockphoto.com/vectors/truck-icon-logo-vector-illustration-design-vector-id1174364905?s=612x612"
          alt="logo"
          className="logo-img"
        ></img>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Export">Export</NavDropdown.Item>
              <NavDropdown.Item href="/Import">Import</NavDropdown.Item>
              <NavDropdown.Item href="/Vehicles">Vehicles</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Log In</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar0;
