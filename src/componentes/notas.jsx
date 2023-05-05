import React from "react";
import '../styles/notas.css'
import Boton from "./boton";



function Notas(props) {
  return (
    <div className="contenedor-principal-notas">
      <div className="contenedor-notas">
        <h3 className="estilo-titulo-notas">
          {/* Titulo Notas */}
          {props.titulo}
        </h3>
        <p className="estilo-contenido-notas">
          {/* Contenido notas */}
          {props.contenido}
        </p>
      </div>
      <Boton
        texto='X'
        esBotonDeClic={true}
      // manejarClic={manejarClic}
      />
    </div>

  );
}

export default Notas;