import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../styles/notasEstiloEditable.css";
import MenuHamburger from "./menu.jsx";
import { Container, Row, Col } from "react-bootstrap"; // Importa Row y Col de react-bootstrap

export default function NotaEditable() {
  // Estado para controlar el color del cuadro
  const [color, setColor] = useState("");

  // Función para cambiar el color del cuadro
  const cambiarColor = (event) => {
    const nuevoColor = event.target.value;
    setColor(nuevoColor);
  };

  return (
    <Container className="fluid">
      <MenuHamburger />
      <Row className="justify-content-center align-items-center h-100">
        <Row  xs={12} md={6} lg={4} className=" justify-content-center align-items-center">
          <Form.Label htmlFor="exampleColorInput">Chose the color</Form.Label>
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#c7adef"
            title="Choose your color"
            onChange={cambiarColor}
            className="color-input"
          />
          </Row>
          <div
            className="color-box modelo-nota"
            style={{
              backgroundColor: color,
            }}
          >
            <div class="triangle"></div>
          </div>
        
      </Row>
    </Container>
  );
}
