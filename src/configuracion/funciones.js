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


export async function cerrarSesion() {
    await auth.signOut();
  }

  export async function usuarioExiste(uid) {
    //donde vamos a buscar la referencia
    //Referencia del doc = docRef
    //ruta de la referencia doc(db, coleccion, id del usuario)
    // si existe users devuelve true sino false
    const docRef = doc(db, "users", uid);
    //llamammos a la refencia
    const docSnap = await getDoc(docRef);
  //3 metodos: data (trae los datos) , exist (true o false) y get (trae  doc tal cual)
    return docSnap.exists();
  }

  //registrar usuario
  export async function registrarNuevoUsuario(user){
    try {
      //definir coleccion primero
      const coleccionRef=collection(db, "users")
      //const docRef= doc(db, "users", user.uid)
      const docRef= doc(coleccionRef,user.uid)
      await setDoc(docRef,user)
    } catch (error) {
      
    }
  }

  //actualizar usuario
export async function actualizarUsuario(user){
  try {
    const coleccionRef=collection(db, "users")
    const docRef= doc(coleccionRef,user.uid)
    await setDoc(docRef,user)
  } catch (error) {
    
  }
}

//agregar nueva nota
export async function nuevaNota(user){
  const coleccionRef=collection(db, "notes")

  const docRef= doc(coleccionRef)
  await setDoc(docRef,user)
  try {
    
  } catch (error) {
    
  }
}

//editar nota
export async function editarNota(user){
  const coleccionRef=collection(db, "notes")
  const docRef= doc(coleccionRef,user.uid)
  await setDoc(docRef,user)
  try {
    
  } catch (error) {
    
  }

  //eliminar nota
}
  