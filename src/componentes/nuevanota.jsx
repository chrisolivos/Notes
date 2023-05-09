import React, { useState } from "react";
import '../styles/nuevanota.css'
// class AgregarNota extends Component{
//     constructor{
//         super();
//     }
// }
const valoresIniciales = {
    uid: '',
    titulo: '',
    contenido: ''
};

export default function NuevaNota() {
//al useState vamos a darlos los valores iniciales
const [valores, setvalores] = useState(valoresIniciales);

//funcion que capture los datos
const formOnSubmit = e => {
    
    e.preventDefault();
    //console.log(e)
    setvalores={
        uid: '',
        titulo: e.titulo,
        contenido: e.contenido
  
    }
    console.log(valores)  

}

    return (
        <form className="form-nueva-nota" onSubmit={formOnSubmit}>
            <div className="contenedor-nueva-nota">
                <input id="titulo" type="text" placeholder="Escribe el titulo" ></input>
                <textarea id="contenido" name="contenidoNota" className="textarea-nota" rows="3"
                    placeholder="Escribe tu nota"></textarea>
                <button className="boton-agregar"  >
                    Guardar
                </button>
            </div>
        </form>
    );
}