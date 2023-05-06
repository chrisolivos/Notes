import React, { useEffect, useState } from "react";
import { auth } from "../configuracion/firebaseConfig.js"
import { GoogleAuthProvider, onAuthStateChanged , signInWithPopup} from "firebase/auth";




export default function LoginView() {
    const [currentUser, setCurrentUser] = useState(null);
    const [state, setCurrentState] = useState(0);
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
        setCurrentState(1)
        onAuthStateChanged(auth, verificandoSiHayUsuarioLogueado)
    }, []);

    function verificandoSiHayUsuarioLogueado(user) {
        if (user) {
            setCurrentState(3)
            console.log(user.displayName);
        } else {
            console.log("No hay usuario logueado");
        }
    }

    //logeando con google
    async function loginWithGoogle() {
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

//segun el state realizara algo
if (state===2){
    return (
    <div>logueado y registrado</div>
    )
}

if (state===3){
    return (
    <div>logueado sin registro</div>
    )
}
if (state===4){
    return (
        <div>
        <button onClick={loginWithGoogle}>Login con Google</button>
        </div>
    );
}

return(
    // <div>Cargando...</div>
    <div>
    <button onClick={loginWithGoogle}>Login con Google</button>
    </div>
)
   
}