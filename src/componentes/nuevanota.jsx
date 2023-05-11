import React, { useState } from "react";
import '../styles/nuevanota.css'
import { cerrarSesion, nuevaNota } from "../configuracion/funciones";
import { useParams } from "react-router-dom";
import {useNavigate } from 'react-router-dom'




const valoresIniciales = {
    userUid: '',
    titulo: '',
    contenido: '',
    fecha:''
};

export default function NuevaNota(user) {
    //al useState vamos a darlos los valores iniciales
    const [valores, setValores] = useState(valoresIniciales);
    const idUsusario = useParams();
    //console.log(idUsusario)

    //funcion que toma los valores del input 
    const cambiosTextoInput = e => {
        const { name, value } = e.target;
        //...valores: que mantenga los valores que tiene
        setValores({ ...valores, [name]: value })

    }
    //funcion que capture los datos
    const formOnSubmit = e => {
        e.preventDefault();

        crearNota()
        async function crearNota() {
            await nuevaNota({
                userUid: idUsusario.uid,
                // uid:'eotjnRgEfKhV480ek5QBkRmtz292',
                titulo: valores.titulo,
                contenido: valores.contenido,
                fecha:new Date()

            });
        }
      //  setValores(valoresIniciales)
      e.target.reset()
        console.log(valores)
  
    }
    const navegar = useNavigate();
    async function Signoutview() {
        
          await  cerrarSesion()
         navegar('/')

        
    }


    return (
        <>
            <div >
            <button className="contenedor-boton-logout animado" onClick={Signoutview}>Logout</button>
            </div>
            <form id="frmNuevaNota" className="form-nueva-nota" onSubmit={formOnSubmit}>
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
        </>
    );
}