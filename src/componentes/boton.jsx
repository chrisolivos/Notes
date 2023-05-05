import React from "react"; 
import '../styles/boton.css';




function Boton({ texto, opcionClic}) {
  //opcion: agregar, editar, eliminar
    //, esBotonDeClic, manejarClic 
    return (
      //operador ternario (opciones)
    //   <button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"} onClick={manejarClic}>
    //     {texto}
    //   </button>
    <button className="boton" onClick={opcionClic}>
    {texto}
  </button>
    )
  
  }
  export default Boton;