import { auth, db } from "./firebaseConfig";
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
  orderBy,
  updateDoc
} from "firebase/firestore";
import { signOut } from 'firebase/auth'


export async function cerrarSesion() {
  await signOut(auth);
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
export async function registrarNuevoUsuario(user) {
  try {
    console.log('datos de usuario en funcion', user)
    //definir coleccion primero
    const coleccionRef = collection(db, "users")
    //const docRef= doc(db, "users", user.uid)
    const docRef = doc(coleccionRef, user.uid)
    await setDoc(docRef, user)
  } catch (error) {

  }
}

//actualizar usuario
export async function actualizarUsuario(user) {
  try {
    const coleccionRef = collection(db, "users")
    const docRef = doc(coleccionRef, user.uid)
    await setDoc(docRef, user)
  } catch (error) {

  }
}

//agregar nueva nota
export async function nuevaNota(userUid) {
  try {
    const coleccionRef = collection(db, "notes")
    const docRef = doc(coleccionRef)
    await setDoc(docRef, userUid)
    // await addDoc(coleccionRef,userUid);
  } catch (error) {

  }
}

//editar nota
export async function editarNota(noteUpdate) {
  try {
    //   console.log('update', noteUpdate);
    const coleccionRef = doc(db, "notes", noteUpdate.id);

    await updateDoc(coleccionRef, {
      titulo: noteUpdate.titulo,
      contenido: noteUpdate.contenido,
      fecha: noteUpdate.fecha
    })

    // const coleccionRef=collection(db, "notes")
    // const docRef= doc(coleccionRef,noteUpdate.idNota)
    // await setDoc(docRef,noteUpdate)
  } catch (error) {

  }

}


//eliminar nota
export async function deleteNote(idNota) {
  console.log('func delete uid', idNota)
  await deleteDoc(doc(db, "notes", idNota.idNota));
  // try {
  //   const coleccionRef=collection(db, "notes")
  //   const docRef= doc(coleccionRef,user.uid)
  //   await setDoc(docRef,user)
  // } catch (error) {

  // }

}