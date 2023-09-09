import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { cerrarSesion } from "../configuracion/funciones";

function MenuHamburger() {
  const navegar = useNavigate();
  async function Signoutview() {
    await cerrarSesion();
    navegar("/");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Color</Nav.Link>
            <Nav.Link href="#link">Trash</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <Button variant="danger" onClick={Signoutview}>Logout</Button>
      </Container>
    </Navbar>
  );
}

export default MenuHamburger;
