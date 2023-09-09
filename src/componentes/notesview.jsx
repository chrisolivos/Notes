import React from "react";
import "../styles/notas.css";
import ModalEditNote from "./modalEditNote";
import ModalDeleteNote from "./modalDeleteNote";

function Notas({ idNota, titulo, contenido }) {
  // Función para restaurar saltos de línea
  const restaurarSaltosDeLinea = (texto) => {
    return texto.replace(/\|\|newline\|\|/g, "\n");
  };

  return (
    <>
      <div className="contenedor-principal-notas">
        {/* <button onClick={cerrarSesion}>Logout</button> */}
        <div className="contenedor-notas">
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
    </>
  );
}

export default Notas;
