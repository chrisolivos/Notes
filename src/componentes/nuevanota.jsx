import React from "react";
import '../styles/nuevanota.css'
// class AgregarNota extends Component{
//     constructor{
//         super();
//     }
// }

export function NuevaNota(){
    return(
        <div className="contenedor-nueva-nota">
            <input type="text" className="input-nota"></input>
            <button className="boton-agregar">Agregar</button>
        </div>
    );
}