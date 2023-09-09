import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Boton from "./button";
import { deleteNote } from "../configuracion/funciones";

function ModalDeleteNote(idNota) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function DeleteNotes() {
    console.log("eliminar id", idNota);
    setShow(false);
    await deleteNote(idNota);
  }

  return (
    <>
      <Boton
        tipo="eliminar"
        manejarClic={handleShow}
      ></Boton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={DeleteNotes}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteNote;
