import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="success"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Link to="/">
          <img src="logo/shree_hotel_logo.png" alt="" />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/orders"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "50px",
                fontSize: "larger",
              }}
            >
              <span>Orders</span>
            </Link>
            <Link
              to="/rooms"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "50px",
                fontSize: "larger",
              }}
            >
              <span>Book Now</span>
            </Link>
            <Link
              to="/invoices"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "50px",
                fontSize: "larger",
              }}
            >
              <span>Invoices</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
