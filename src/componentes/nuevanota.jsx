import React, { useState } from "react";
import '../styles/nuevanota.css'
import { nuevaNota } from "../configuracion/funciones";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const valoresIniciales = {
    userUid: '',
    titulo: '',
    contenido: '',
    fecha: '',
    estado:''
};

export default function NuevaNota(user) {
    //al useState vamos a darlos los valores iniciales
    const [valores, setValores] = useState(valoresIniciales);
    // const idUsusario = useParams();
    const idUsusario = sessionStorage.getItem('userIdLogin')
    //console.log(idUsusario)

    //funcion que toma los valores del input 
    const cambiosTextoInput = e => {
        const { name, value } = e.target;
    //    console.log(e.target.value)
        //...valores: que mantenga los valores que tiene
        setValores({ ...valores, [name]: value })

    }
    //funcion que capture los datos
    const formOnSubmit = e => {
        e.preventDefault();

        crearNota()
        async function crearNota() {
            await nuevaNota({
                userUid: idUsusario,
                // uid:'eotjnRgEfKhV480ek5QBkRmtz292',
                titulo: valores.titulo,
                contenido: valores.contenido,
                fecha: new Date(),
                estado: 'activo'

            });
        }
        //  setValores(valoresIniciales)
        e.target.reset()
     //   console.log(valores)

    }


    return (
        <>

            <div className="contenedor-principal">
            <div className='contenedor-form-nueva-nota'>

                <Form className='form-estilo-nueva-nota' onSubmit={formOnSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="titulo" placeholder="write a title" onChange={cambiosTextoInput} />
                    </Form.Group>
                    <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea"  name="contenido"  rows={4}  placeholder="write a content" onChange={cambiosTextoInput} />
                    </Form.Group>
                    <Button variant="warning" type="submit" className="boton-agregar"  >
                        Guardar
                    </Button>
                </Form>
                {/* <div >
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
            </form> */}
            </div>
            </div>
        </>

    );
}