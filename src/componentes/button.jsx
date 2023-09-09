import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/boton.css";

//const manejarClic()=>()

function Boton({ tipo, manejarClic }) {
  //opcion:  editar, eliminar
  //, esBotonDeClic, manejarClic
  return (
    //operador ternario (opciones del css segun sea el boton)
    // <button className={esBotonDeClic ? "boton-editar" : "boton-eliminar"} onClick={manejarClic}>
    //   {texto}
    // </button>
    //   <button className="boton" onClick={manejarClic}>

    //   {texto}
    // </button>
    <button
      // className={`btn btn-${tipo === 'editar' ? 'warning' : 'danger'}`}
      className={`btn btn-outline-danger`}
      onClick={manejarClic}
    >
      {tipo === "editar" ? (
        <>
          <span className="bi bi-pencil-square" />
        </>
      ) : (
        <span className="bi bi-trash" />
      )}
    </button>
  );
}
export default Boton;
