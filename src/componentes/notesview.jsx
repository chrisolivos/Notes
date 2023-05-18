import React from "react";
import '../styles/notas.css'
import ModalEditNote from './modalEditNote'
import ModalDeleteNote from './modalDeleteNote'



function Notas({ idNota, titulo, contenido }) {
 // const [estadoModal, setEstadoModal] = useState(false);
//console.log('id',id)
  // const editarNotas = () => {

  //   setEstadoModal(!estadoModal);
  //    console.log('esatdoModal funcion',!estadoModal)
  //   // console.log('setesatdoModal',setEstadoModal)
  //   console.log("editar")
    
  // }

  // const eliminarNotas = () => {
  //   // setNumClics(0);
  //   console.log("eliminar")
  // }

 

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
          {/* <Boton
            texto='E'
            //  esBotonDeClic={true}
            manejarClic={editarNotas} /> */}
          {/* <Boton
            texto='X'
            // esBotonDeClic={false}
            manejarClic={eliminarNotas} /> */}
          <ModalDeleteNote 
          idNota={idNota}
          />
            <ModalEditNote 
            idNota={idNota}
            titulo= {titulo}
            contenido={contenido}
             />
        </div>
      </div>


      {/* <div className="contenido-boton-agregar-nota">
      <BotonAgregarNota
      texto='+'
      iduser={uid }
       />
      </div> */}
    </>
  );
}

export default Notas;