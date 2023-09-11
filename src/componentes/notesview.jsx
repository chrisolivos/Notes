import React from "react";
import "../styles/notas.css";
import ModalEditNote from "./modalEditNote";
import ModalDeleteNote from "./modalDeleteNote";
import { Container, Row, Col } from "react-bootstrap";

function Notas({ idNota, titulo, contenido, color }) {
  // Función para restaurar saltos de línea
  const restaurarSaltosDeLinea = (texto) => {
    return texto.replace(/\|\|newline\|\|/g, "\n");
  };

  return (
    <>
    <Container className="justify-content-wrap">
    <div >

      <div
        className="color-box modelo-nota"
        style={{
          backgroundColor: { color },
        }}
      >
        <div class="triangle"></div>
        <h4 className="estilo-titulo-notas">
          {/* Titulo Notas */}
          {titulo}
        </h4>
        <pre className="estilo-contenido-notas">
          {/* Contenido notas */}
          {restaurarSaltosDeLinea(contenido)}
        </pre>
      </div>
      <div className="contenedor-botones">
        <ModalDeleteNote idNota={idNota} />
        <ModalEditNote
          idNota={idNota}
          tituloNota={titulo}
          contenidoNota={restaurarSaltosDeLinea(contenido)}
        />
      </div>
      </div>
   
      </Container>
      {/* 
      <div className="contenedor-principal-notas">

        <div className="contenedor-notas">
          <h4 className="estilo-titulo-notas">
            {/* Titulo Notas */}
      {/*}      {titulo}
          </h4>
          <pre className="estilo-contenido-notas">
            {/* Contenido notas */}
    {/*}        {restaurarSaltosDeLinea(contenido)}
          </pre>
        </div>
        <div className="contenedor-botones">
          <ModalDeleteNote idNota={idNota} />
          <ModalEditNote
            idNota={idNota}
            tituloNota={titulo}
            contenidoNota={restaurarSaltosDeLinea(contenido)}
          />
        </div>
      </div> */}
    </>
  );
}

export default Notas;
