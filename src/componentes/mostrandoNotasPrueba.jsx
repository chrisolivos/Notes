import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    setDoc,
    deleteDoc,
    orderBy
} from "firebase/firestore";
import ItemDetails from './itemsDetails'


//traer servicio firestore
// crear puntero al dato que queremos traer
// traer el dato con una promesa

export const MostrarData = () => {
    const { dato, setDato } = useState({});
    //id: 'hA35vTTQNERgEMYVrerU', contenido: 'prueba con fecha', fecha: it, titulo: 'titulo', userUid: 'n5d0lwEYBwaixHFB0nnrbV7CulU2'
    const { detallaId } = useParams();

    useEffect(() => {
        const queryDB = getFirestore()
        // id de la nota
        const queryDoc = doc(queryDB, "notes", 'hA35vTTQNERgEMYVrerU')
        // const resPromise = Promise.resolve(getDoc(queryDoc))
        getDoc(queryDoc)
            .then((res) => {
               // console.log({ id: res.id, ...res.data() }),
                   setDato({ id: res.id, ...res.data() })
                 

            }
            )
    }, [])

    return (

        <>
            {console.log('valores dato', dato)}

            <div >
                <ItemDetails datos={dato} />
            
            </div>
        </>
    )

}