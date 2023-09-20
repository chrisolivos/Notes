import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MenuHamburger from "./menu.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {uploadFile} from "../configuracion/funciones.js";
import { db } from "../configuracion/firebaseConfig.js";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

function EditProfile() {
  const [validated, setValidated] = useState(false);
  const [file,setFile]=useState(null)
  const idUsusario = sessionStorage.getItem("userIdLogin");


  useEffect(() => {
    //  const collectionRef = collection(db, "notes")
   //  console.log('usuario', idUsusario)
    const q = query(
      collection(db, "user"),
      where("uid", "==", idUsusario)
    )}, []);

  const handleSubmit = (event) => {
   // event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    //console.log(file,idUsusario)
    //variable session que tiene el id del usuario logueado
   // const result =
     uploadFile(file,idUsusario);
   // console.log(result)
    setValidated(true);
  };

  return (
    <>
      <MenuHamburger />
      <Container fluid>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3 justify-content-center align-items-center">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control required type="text" placeholder="Name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Row className="mb-3 justify-content-center align-items-center">
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            {/* <Row className="mb-3 justify-content-center align-items-center">
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row> */}
          </Row>
          <Row className="mb-3 justify-content-center">
            {/* <Form.Group as={Col} md="4" className="mb-3 ">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group> */}
            <Form.Group controlId="formFile" as={Col} md="4" className="mb-3">
              <Form.Label>Photo</Form.Label>
              <Form.Control type="file" onChange={(e)=>setFile(e.target.files[0])}/>
            </Form.Group>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} md={1}>
                <Button type="submit" className="btn-danger">
                  Save
                </Button>
              </Col>
            </Row>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default EditProfile;
