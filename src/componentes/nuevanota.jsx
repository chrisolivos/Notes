import React, { useState } from "react";
import "../styles/nuevanota.css";
import { nuevaNota } from "../configuracion/funciones";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/notasEstiloEditable.css";
import { Row, Col } from "react-bootstrap";

const valoresIniciales = {
  userUid: "",
  titulo: "",
  contenido: "",
  fecha: "",
  estado: "",
  color: "",
};

export default function NuevaNota(user) {
  //al useState vamos a darlos los valores iniciales
  const [valores, setValores] = useState(valoresIniciales);
  // Estado para controlar el color del cuadro
  const [color, setColor] = useState("");

  // const idUsusario = useParams();
  const idUsusario = sessionStorage.getItem("userIdLogin");

  // Función para cambiar el color del cuadro
  const cambiarColor = (event) => {
    const nuevoColor = event.target.value;
    setColor(nuevoColor);
  };

  const cambiosTextoInput = (e) => {
    const { name, value } = e.target;
    // Reemplazar saltos de línea con ||newline||
    const contenido = value.replace(/\n/g, "||newline||");
    setValores({ ...valores, [name]: contenido });
  };
 // console.log("color", color)

  //funcion que capture los datos
  const formOnSubmit = (e) => {
    e.preventDefault();

    crearNota();
    async function crearNota() {
   //   console.log(color, valores.color)
      await nuevaNota({
        userUid: idUsusario,
        // uid:'eotjnRgEfKhV480ek5QBkRmtz292',
        titulo: valores.titulo,
        contenido: valores.contenido,
        fecha: new Date(),
        estado: "activo",
        color: color,
      });
    }
    //  setValores(valoresIniciales)
    setColor("#c7adef");
    e.target.reset();
    //   console.log(valores)
  };

  return (
    <>
    
      <div
        className="color-box modelo-nota"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="triangle">
          
        </div>
        <Form onSubmit={formOnSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="titulo"
              placeholder="write a title"
              onChange={cambiosTextoInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              name="contenido"
              rows={4}
              placeholder="write a content"
              onChange={cambiosTextoInput}
            />
          </Form.Group>
          <Row className="justify-content-center align-items-left h-100">
            <Row xs={12} md={6} lg={4}>
              <Col>
                <Button variant="light" type="submit">
                  <span className="bi bi-clipboard-check" />
                </Button>
              </Col>
              <Col>
                <Button variant="light" type="reset">
                  <span className="bi bi-x-square" />
                </Button>
              </Col>
              <Col>
                <Form.Control
                  type="color"
                  id="exampleColorInput"
                  defaultValue="#c7adef"
                  title="Choose your color"
                  onChange={cambiarColor}
                  className="color-input"
                />
              </Col>
            </Row>
          </Row>
        </Form>
      </div>
    </>
  );
}
