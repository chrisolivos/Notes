import React from "react";
import '../styles/notas.css'
import ModalEditNote from './modalEditNote'
import ModalDeleteNote from './modalDeleteNote'



function Notas({ idNota, titulo, contenido }) {


  return (

    <>
      <div className="contenedor-principal-notas">
        {/* <button onClick={cerrarSesion}>Logout</button> */}
        <div className="contenedor-notas">
          <h4 className="estilo-titulo-notas">
            {/* Titulo Notas */}
            {titulo}
          </h4>
          <p className="estilo-contenido-notas">
            {/* Contenido notas */}
            {contenido}
          </p>
        </div>
        <div className="contenedor-botones">
          <ModalDeleteNote 
          idNota={idNota}
          />
            <ModalEditNote 
            
            idNota={idNota}
            tituloNota= {titulo}
            contenidoNota={contenido}
             />
        </div>
      </div>

    </>
  );
}

export default Notas;