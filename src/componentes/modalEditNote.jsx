//  import React from 'react';

// const ModalEditNote = ()=> {
//   return(
// <div>
//   Modal...
// </div>
//   )

// }

// export default ModalEditNote;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'; 
import Modal from 'react-bootstrap/Modal';
import Boton from './button';

function ModalEditNote(idNota,titulo,contenido) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log('datos',idNota,titulo, contenido)

  return (
    <>
      <Boton 
      texto='E'
      manejarClic={handleShow}>
      </Boton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="input"
                value={titulo[1]}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} value={contenido}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//render(<ModalEditNote />);
export default ModalEditNote;