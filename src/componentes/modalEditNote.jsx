import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Boton from "./button";
import { editarNota } from "../configuracion/funciones";

function ModalEditNote(idNota, tituloNota, contenidoNota) {
  const [show, setShow] = useState(false);

  const arrayNote = [idNota, tituloNota, contenidoNota];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //console.log("array", arrayNote);
  // console.log(idNota, tituloNota, contenidoNota)

  const valoresIniciales = {
    titulo: arrayNote[0].tituloNota,
    contenido: arrayNote[0].contenidoNota,
  };

  // console.log('iniciales', valoresIniciales)

  const [valores, setValores] = useState(valoresIniciales);

  //funcion que toma los valores del input
  const cambiosTextoInput = (e) => {
    const { name, value } = e.target;
    //    console.log(e.target.value)
    //...valores: que mantenga los valores que tiene
    setValores({ ...valores, [name]: value });
  };
  //console.log(valores);

  const formOnSubmit = (e) => {
    // console.log('submit')
    e.preventDefault();
    //   console.log(e)
    //    console.log('submit')

    editarNotaFuncion();
    async function editarNotaFuncion() {
      //    console.log(arrayNote[0].idNota, valores.titulo, valores.contenido)

      await editarNota({
        id: arrayNote[0].idNota,
        // uid:'eotjnRgEfKhV480ek5QBkRmtz292',
        titulo: valores.titulo,
        contenido: valores.contenido,
        fecha: new Date(),
      });
    }
    setShow(false);
    //   setValores(valoresIniciales)
    e.target.reset();
    //    console.log(valores)
  };

  return (
    <>
      <Boton
        // texto='E'
        tipo="editar"
        manejarClic={handleShow}
      ></Boton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title </Form.Label>
              <Form.Control
                name="titulo"
                type="input"
                defaultValue={arrayNote[0].tituloNota}
                autoFocus
                onChange={cambiosTextoInput}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="contenido"
                defaultValue={arrayNote[0].contenidoNota}
                onChange={cambiosTextoInput}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditNote;
