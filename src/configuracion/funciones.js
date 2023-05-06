import { auth, db } from "./firebaseConfig";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    setDoc,
    deleteDoc,
  } from "firebase/firestore";


export async function logout() {
    await auth.signOut();
  }

  export async function userExists(uid) {
    //donde vamos a buscar la referencia
    //Referencia del doc = docRef
    //ruta de la referencia doc(db, coleccion, id del usuario)
    // si existe users devuelve true sino false
    const docRef = doc(db, "users", uid);
    //llamammos a la refencia
    const docSnap = await getDoc(docRef);
  
    return docSnap.exists();
  }