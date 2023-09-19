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
import { signOut, createUserWithEmailAndPassword } from 'firebase/auth'


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

// Función para registrar un nuevo usuario
export async function registrarNuevoUsuario(user) {
  try {
    // Registrar el usuario en Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    // Obtener el UID del usuario registrado
    const uid = userCredential.user.uid;

    // Crear un documento en la colección "users" con el UID generado automáticamente
    const coleccionUsers = collection(db, 'users');
   // const docUsers = doc(coleccionUsers)

    await addDoc(coleccionUsers, {
      uid: uid,
      displayName: user.displayName,
      email: user.email,
      password: user.password,
      profilePicture: user.profilePicture

    });
  //  usuarioExiste(uid)
   // console.log('Nuevo usuario registrado con UID:', uid);
  } catch (error) {
    console.error('Error al registrar el nuevo usuario:', error);
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
      fecha: noteUpdate.fecha,
      color: noteUpdate.color
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