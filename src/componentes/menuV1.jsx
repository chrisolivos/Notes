import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../styles/menu.css'

function MenuLateral() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
      ☰
      </Button>
    <div>
      <Offcanvas show={show} onHide={handleClose}   backdropClassName="contenedor-body" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Opciones</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
          <a href="">
            <li>Buscar</li> 
            </a>
          </p>
       
          <p>
          <a href="">
            <li>Cambiar color</li> 
            </a>
        
            </p>
        
            <p>
            <a href="">
            <li>Papelera</li> 
            </a>
        
          </p>
      
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  );
}

export default MenuLateral;