import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Autenticacion from "./AuthProvider.jsx";


//import Signoutview from './signoutview'

export default function RegistrarUsuario() {
    const navegar = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [estado, setEstado] = useState(0);

    function funcionUsuarioLogueado(user) {
         setCurrentUser(user)
        navegar('/dashboard')
    }

    function funcionUsuarioNoRegistardo(user) {
        setCurrentUser(user)
    
        // navegar('/register')
     //    setEstado(3)
    }

    function funcionUsuarioNoLogueado() {
        navegar('/')
        //setEstado(4)
    }
if (estado===3){
return(
    <div>
        Bienvenido {currentUser.displayName}
    </div>
);
}

    return (
        
        <Autenticacion
            usuarioLogueado={funcionUsuarioLogueado}
            usuarioNoLogueado={funcionUsuarioNoLogueado}
            usuarioNoRegistrado={funcionUsuarioNoRegistardo}
        />
        
    );
}