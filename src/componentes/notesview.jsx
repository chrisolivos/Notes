import React from "react";
import "../styles/notas.css";
import "../styles/notasEstiloEditable.css";
import ModalEditNote from "./modalEditNote";
import ModalDeleteNote from "./modalDeleteNote";
import { Row, Col } from "react-bootstrap";

function Notas({ idNota, titulo, contenido, color }) {
  // Función para restaurar saltos de línea
  const restaurarSaltosDeLinea = (texto) => {
    return texto.replace(/\|\|newline\|\|/g, "\n");
  };
 // console.log("datos", idNota, titulo, contenido, color);
  return (
    <>
      <div className="contenedor-principal-notas">
        <div>
          <div
            className="color-box modelo-nota"
            style={{
              backgroundColor: color,
            }}
          >
            <div className="triangle"></div>
            <div className="contenedor-notas">
              <h4 className="estilo-titulo-notas">
                {/* Titulo Notas */}
                {titulo}
              </h4>
              <pre className="estilo-contenido-notas">
                {/* Contenido notas */}
                {restaurarSaltosDeLinea(contenido)}
              </pre>

              <div className="contenedor-botones">
                <Row className="justify-content-center align-baseline h-100">
                  <Col>
                    <ModalDeleteNote  idNota={idNota} />
                  </Col>
                  <Col>
                    <ModalEditNote
                      idNota={idNota}
                      tituloNota={titulo}
                      contenidoNota={restaurarSaltosDeLinea(contenido)}
                      colorNota={color}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notas;
