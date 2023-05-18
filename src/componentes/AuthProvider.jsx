import React, { useEffect, useState } from "react";
import { auth } from "../configuracion/firebaseConfig.js"
import { onAuthStateChanged } from "firebase/auth";
import { registrarNuevoUsuario, usuarioExiste } from "../configuracion/funciones.js";
// import cerrarSesion from "./signoutview.jsx";
import { useNavigate } from 'react-router-dom'


export  default function Autenticacion({ hijo, usuarioLogueado, usuarioNoLogueado, usuarioNoRegistrado }) {
    const navegar = useNavigate();
    useEffect(() => {
        //  actualizarEstado(1)
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const registrado = await usuarioExiste(user.uid);
                if (registrado) {
                    // TODO: ir a notas
                    // actualizarEstado(2)
                    usuarioLogueado(user)
                  //  console.log(user.displayName);
                } else {
                    //registrar al usuario
                    await registrarNuevoUsuario({
                        uid: user.uid,
                        displayName: user.displayName,
                        profilePicture: user.photoURL,
                        email: user.email

                    });
                    usuarioLogueado(user)
                    //usuarioNoRegistrado(user)
                    

                }

            } else {
                usuarioNoLogueado()
                console.log("No hay usuario logueado");

                // ir a login
            }
        })
    }, [navegar, usuarioLogueado, usuarioNoLogueado, usuarioNoRegistrado]);







    return (

        <div>{hijo}</div>
    )
}