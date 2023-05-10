import React from "react"; 
import '../styles/boton.css';




export default function BotonAgregarNota({ texto, uid}) {
  //opcion:  editar, eliminar
    //, esBotonDeClic, manejarClic 
    return (
      //operador ternario (opciones)
    //   <button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"} onClick={manejarClic}>
    //     {texto}
    //   </button>
    <button className="boton" onClick={uid}>
    {texto}
  </button>
    )
  
  }
 // export default Boton;