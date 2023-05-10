import React, { useState } from "react";
import '../styles/nuevanota.css'
import { nuevaNota } from "../configuracion/funciones";
import { useParams } from "react-router-dom";




const valoresIniciales = {
    userUid: '',
    titulo: '',
    contenido: ''
};

export default function NuevaNota(user) {
//al useState vamos a darlos los valores iniciales
const [valores, setValores] = useState(valoresIniciales);
const idUsusario=useParams() ;
//console.log(idUsusario)

//funcion que toma los valores del input 
const cambiosTextoInput = e =>{
    const {name, value}= e.target;
    //...valores: que mantenga los valores que tiene
    setValores({...valores,[name]:value})
  // setValores({valores,[name]:value})
   // console.log(valores)
 //  console.log(name, value)
}

// const crearNuevaNota = {await registrarNuevoNota({
//     uid: user.uid,
//     displayName: user.displayName,
//     profilePicture: user.photoURL,
//     email: user.email

// });
// }

//funcion que capture los datos
const formOnSubmit = e => {
const [form]=useForm();
    e.preventDefault();
    //console.log(e)
    // setValores={
    //     uid: user.uid,
    //     titulo: e.titulo,
    //     contenido: e.contenido
  
    // }
    crearNota()
 async function crearNota(){
    await nuevaNota({
        userUid: idUsusario.uid,
       // uid:'eotjnRgEfKhV480ek5QBkRmtz292',
        titulo: valores.titulo,
        contenido: valores.contenido

    });
 }
   
    console.log(valores)  

}

    return (
        <form className="form-nueva-nota" onSubmit={formOnSubmit}>
            <div className="contenedor-nueva-nota">
                <label>Ingresa un titulo</label>
                <input name="titulo" type="text" placeholder="Escribe el titulo" onChange={cambiosTextoInput}></input>
                <label>Ingresa contenido</label>
                <textarea name="contenido" className="textarea-nota" rows="3"
                    placeholder="Escribe tu nota" onChange={cambiosTextoInput}></textarea>
                <button className="boton-agregar"  >
                    Guardar
                </button>
            </div>
        </form>
    );
}