import React, { useState, useEffect } from 'react';
import { mostrarNotas } from "../configuracion/funciones.js"
import Notas from './notesview';
import NuevaNota from './nuevanota';
import { useParams } from "react-router-dom";
import '../styles/dashboardview.css'
import { db } from "../configuracion/firebaseConfig.js"
import MenuLateral from './menu.jsx';
import { cerrarSesion } from "../configuracion/funciones";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  docs,
  doc
} from "firebase/firestore";



export default function DashboardView() {
  const [notas, setNotas] = useState([]);
  const [idUser, setIdUser] = useState({});
  //const idUsusario = useParams();
  const idUsusario = sessionStorage.getItem('userIdLogin')
  // console.log('codusuario', idUsusario)

  useEffect(() => {

    //  const collectionRef = collection(db, "notes")
    // console.log('usuario', idUsusario)
    const q = query(collection(db, "notes"), where("userUid", "==", idUsusario), orderBy("fecha", "desc"));
    // const q = query(collectionRef, where("userUid", "==", idUsusario), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setNotas(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, date: doc.data().fecha?.toDate().getTime() })))

    });

    return unsubscribe;
  }, [])

  const navegar = useNavigate();
  async function Signoutview() {

    await cerrarSesion()
    navegar('/')


  }


  if (notas.length > 0) {
    return (
      <>
        <div className="container-boton-logout" >
          <MenuLateral />
          <Button variant="danger" onClick={Signoutview}>Logout</Button>
        </div>

        <NuevaNota />
        <div className='vista-notas'>
          {

            notas?.map((nota) => (

              <Notas
                key={nota.id}
                idNota={nota.id}
                titulo={nota.titulo}
                contenido={nota.contenido}

              />
            ))
          }
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="container-boton-logout" >
          <MenuLateral />
          <Button variant="danger" onClick={Signoutview}>Logout</Button>
        </div>
        <NuevaNota />
      </>
    )
  }

}