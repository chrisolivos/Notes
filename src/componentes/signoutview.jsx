//import React, { useEffect, useState } from "react";
import {cerrarSesion} from '../configuracion/funciones'
import {useNavigate } from 'react-router-dom'

export default async function Signoutview() {
    const navegar = useNavigate();
    return (
        navegar('/'),
        await cerrarSesion()
        
        // <div>
        //     SignOut View
            
        // </div>
    )
}