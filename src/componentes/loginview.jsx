import React, { useState } from "react";
import { auth } from "../configuracion/firebaseConfig.js"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//import { usuarioExiste } from "../configuracion/funciones.js";
import Signoutview from "./signoutview.jsx";
import { useNavigate } from 'react-router-dom'
import Autenticacion from "./AuthProvider.jsx";





export default function LoginVista() {
    const navegar = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [estado, setEstado] = useState(0);


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

    function funcionUsuarioLogueado(user) {
        // setCurrentUser(user)
        navegar('/dashboard')
    }

    function funcionUsuarioNoRegistardo(user) {
        setCurrentUser(user)
      //  navegar('/register')
        setEstado(3)
    }

    function funcionUsuarioNoLogueado() {
    //  navegar('/')
        setEstado(4)
    }



    //segun el estadoo realizara algo
    // if (estado===2){
    //     return (
    //     <div>logueado y registrado
    //         <button onClick={cerrarSesion}>Logout</button>
    //         </div>
    //         //TODO  notas
    //   // navegar('/notes')

    //     )
    // }
    // // navegar('/notes')
    // if (estado === 3) {
    //     //TODO: registrarse
    //     return (
    //         // navegar('/notes')
    //         <div>logueado sin registro, 
    //             <button onClick={Signoutview}>Logout</button>
    //         </div>
    //     )
    // }
    if (estado === 4) {
        return (
            <div>
                <button onClick={loginConGoogle}>Login con Google</button>
            </div>
        );
    }
    return <Autenticacion
        usuarioLogueado={funcionUsuarioLogueado}
        usuarioNoLogueado={funcionUsuarioNoLogueado}
        usuarioNoRegistrado={funcionUsuarioNoRegistardo}
    />


}