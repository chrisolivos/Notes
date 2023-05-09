import React, { useEffect, useState } from "react";
import { auth } from "../configuracion/firebaseConfig.js"
import { GoogleAuthProvider, onAuthStateChanged , signInWithPopup} from "firebase/auth";
import { usuarioExiste } from "../configuracion/funciones.js";
import cerrarSesion from "./signoutview.jsx";
import {useNavigate } from 'react-router-dom'



export default function LoginVista() {
    const navegar = useNavigate();
   // const [currentUser, setCurrentUser] = useState(null);
    const [estado, actualizarEstado] = useState(0);
    /*
    State:
    0 inicializado
    1 cargando
    2 logueado y registrado
    3 logueado sin registro
    4 no hay usuario logueado
    */

    //verificando usuario logeado
    useEffect(() => {
        actualizarEstado(1)
        onAuthStateChanged(auth, verificandoSiHayUsuarioLogueado)
    }, []);

    async function verificandoSiHayUsuarioLogueado(user) {
        if (user) {
            const registrado = await usuarioExiste(user.uid);
                if (registrado){ 
                    // TODO: ir a notas
                    actualizarEstado(2)
                    console.log(user.displayName);
                }else{
                    actualizarEstado(3)
                }

        } else {
            actualizarEstado(4)
            console.log("No hay usuario logueado");
            
            // ir a login
        }
    }

    //logeando con google
    async function loginConGoogle() {
        const googleProvider = new GoogleAuthProvider();
        await signInWithGoogle(googleProvider);

        async function signInWithGoogle(googleProvider) {
            try {
                const res = await signInWithPopup(auth, googleProvider);
                console.log(res);
            } catch (error) {
                console.error(error);
            }
        }

    }

//segun el estadoo realizara algo
if (estado===2){
    return (
    <div>logueado y registrado
        <button onClick={cerrarSesion}>Logout</button>
        </div>
        //TODO  notas
  // navegar('/notes')

    )
}
// navegar('/notes')
if (estado===3){
    //TODO: registrarse
    return (
       navegar('/notes')
    // <div>logueado sin registro
    //      <button onClick={cerrarSesion}>Logout</button>
    // </div>
    )
}
if (estado===4){
    return (
        <div>
        <button onClick={loginConGoogle}>Login con Google</button>
        </div>
    );
}

return(
     <div>Cargando...
        <button onClick={cerrarSesion}>Logout</button>
     </div>
    // <div>
    // <button onClick={loginWithGoogle}>Login con Google</button>
    // </div>
)
   
}