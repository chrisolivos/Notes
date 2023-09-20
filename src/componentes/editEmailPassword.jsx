import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MenuHamburger from "./menu.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function EditEmailPassword() {
  return (
    <>
    <MenuHamburger />
    <Container fluid>
    <Form>
    <Row className="mb-3 justify-content-center align-items-center">
      <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>
    </Row>
      <Row className="mb-3 justify-content-center align-items-center">
      <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Row>
      {/* <Row className="mb-3 justify-content-center align-items-center">
      <Form.Group  className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      </Row> */}
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={2}>
      <Button variant="primary" className='btn-danger' type="submit">
        Save
      </Button>
      </ Col>
      </ Row>
    </Form>
    </Container>
    </>
  );
}

export default EditEmailPassword;