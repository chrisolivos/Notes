import React from "react"; 
import '../styles/boton.css';

function Boton({ texto}) {
    //, esBotonDeClic, manejarClic 
    return (
      //operador ternario (opciones)
    //   <button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"} onClick={manejarClic}>
    //     {texto}
    //   </button>
    <button className="boton">
    {texto}
  </button>
    )
  
  }
  export default Boton;