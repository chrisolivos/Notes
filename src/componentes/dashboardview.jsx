import React, { useState, useEffect } from "react";
import Notas from "./notesview";
import NuevaNota from "./nuevanota";
import "../styles/dashboardview.css";
import { db } from "../configuracion/firebaseConfig.js";
import MenuHamburger from "./menu.jsx";
import { cerrarSesion } from "../configuracion/funciones";
import { useNavigate } from "react-router-dom";

import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  docs,
  doc,
} from "firebase/firestore";

export default function DashboardView() {
  const [notas, setNotas] = useState([]);
  const [idUser, setIdUser] = useState({});
  const idUsusario = sessionStorage.getItem("userIdLogin");
  // console.log('codusuario', idUsusario)

  useEffect(() => {
    //  const collectionRef = collection(db, "notes")
    // console.log('usuario', idUsusario)
    const q = query(
      collection(db, "notes"),
      where("userUid", "==", idUsusario),
      orderBy("fecha", "desc")
    );
    // const q = useEffect(() => { query(collectionRef, where("userUid", "==", idUsusario), orderBy("fecha", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setNotas(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          date: doc.data().fecha?.toDate().getTime(),
        }))
      );
    });

    return unsubscribe;
  }, []);

  const navegar = useNavigate();
  async function Signoutview() {
    await cerrarSesion();
    navegar("/");
  }

  if (notas.length > 0) {
    return (
      <>
        <MenuHamburger />

        <NuevaNota />
        <div className="vista-notas">
          {notas?.map((nota) => (
            <Notas
              key={nota.id}
              idNota={nota.id}
              titulo={nota.titulo}
              contenido={nota.contenido}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <MenuHamburger />

        <NuevaNota />
      </>
    );
  }
}
