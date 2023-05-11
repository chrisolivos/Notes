import React, { useState, useEffect } from 'react';
import { mostrarNotas } from "../configuracion/funciones.js"
import Notas from './notesview';
import NuevaNota from './nuevanota';
import { useParams } from "react-router-dom";
import '../styles/dashboardview.css'
import { db } from "../configuracion/firebaseConfig.js"

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
  const idUsusario = useParams();
  console.log('codusuario', idUsusario)

  useEffect(() => {

    //  const collectionRef = collection(db, "notes")
    // idUsusario n5d0lwEYBwaixHFB0nnrbV7CulU2
    console.log('usuario', idUsusario)
    const q = query(collection(db, "notes"), where("userUid", "==", idUsusario.uid), orderBy("fecha", "desc"));
    // const q = query(collectionRef, where("userUid", "==", idUsusario), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setNotas(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, date: doc.data().fecha?.toDate().getTime() })))


      //   snapshot.docs.forEach(nota=>{
      //     arrayNotas.push(...nota)
      //   })
    });

    return unsubscribe;
  }, [])
  //  const [nota, setNota] = useState({});
  console.log(notas)

  // const todasLasNotas = mostrarNotas(idUsusario.uid);
  //  mostrarNotas(idUsusario.uid).then((data)=>{
  //   setNotas([...data.data()])
  //  }

  // )

  //  setNotas([...mostrarNotas(idUsusario.uid)])
  // console.log('notas view', notas)
  //}
  //)
  if (notas.length > 0) {
    return (
      <>
        <NuevaNota />
        <div className='vista-notas'>
          {

            notas?.map((nota) => (

              <Notas
                key={nota.id}
                titulo={nota.titulo}
                contenido={nota.contenido}
              //     onDeleteLink={handleOnDeleteLink}
              //     onUpdateLink={handleOnUpdateLink}
              />
            ))
          }
        </div>
      </>
    )
  }else{
    return (
      
        <NuevaNota />
        )
  }

}