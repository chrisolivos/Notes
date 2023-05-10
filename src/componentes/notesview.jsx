import React from "react";
import '../styles/notas.css'
import Boton from "./button";
import { cerrarSesion } from "../configuracion/funciones";
import BotonAgregarNota from './buttonAddNote'


function Notas({uid,titulo,contenido}) {
  return (

    <>
      <div className="contenedor-principal-notas">
        {/* <button onClick={cerrarSesion}>Logout</button> */}
        <div className="contenedor-notas">
          <h3 className="estilo-titulo-notas">
            {/* Titulo Notas */}
            {titulo}
          </h3>
          <p className="estilo-contenido-notas">
            {/* Contenido notas */}
            {contenido}
          </p>
        </div>
        <Boton
          texto='X'
          esBotonDeClic={true} />
      </div>
      <div className="contenido-boton-agregar-nota">
      <BotonAgregarNota
      texto='+'
      iduser={uid }
       />
      </div>
    </>
  );
}

export default Notas;