import React from "react"; 
import '../styles/boton.css';

//const manejarClic()=>()


function Boton({ texto, manejarClic}) {
  //opcion:  editar, eliminar
    //, esBotonDeClic, manejarClic 
    return (
      //operador ternario (opciones del css segun sea el boton)
      // <button className={esBotonDeClic ? "boton-editar" : "boton-eliminar"} onClick={manejarClic}>
      //   {texto}
      // </button>
    <button className="boton" onClick={manejarClic}>
    {texto}
  </button>
    )
  
  }
  export default Boton;