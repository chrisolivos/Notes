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
    orderBy
  } from "firebase/firestore";

  import {signOut} from 'firebase/auth'


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
export async function nuevaNota(userUid){
  try {
    const coleccionRef=collection(db, "notes")
    const docRef= doc(coleccionRef)
   await setDoc(docRef,userUid)
 // await addDoc(coleccionRef,userUid);
  } catch (error) {
    
  }
}

//editar nota
export async function editarNota(user){

  try {
    const coleccionRef=collection(db, "notes")
    const docRef= doc(coleccionRef,user.uid)
    await setDoc(docRef,user)
  } catch (error) {
    
  }

  //eliminar nota
}

// export async function mostrarNotas(userUid){

//   // const collectionRef = collection(db, value)
//   // const q = query(collectionRef, orderBy("date", "desc"));
//   // const unsubscribe = onSnapshot(q, (querySnapshot) => {
//   //   setNoteList(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, date: doc.data().date?.toDate().getTime() })))
// //  console.log('funcion mostrarNotas',userUid)
// try {
//   const arregloNotas = [];
//   const q = query(collection(db, "notes"), where("userUid", "==", userUid), orderBy("fecha", "desc"));
//    const querySnapshot = await onSnapshot(q);

//   // querySnapshot.forEach((doc) => {
//   //   // doc.data() is never undefined for query doc snapshots
//   //   const arregloNota = {id:doc.id,...doc.data() };
    
//   //  // arregloNota.id = doc.id;
//   //   //console.log(doc.id, " => ", doc.data());
//   //   //console.log(arregloNota);
//   //   arregloNotas.push(arregloNota);
//   // });
//  // console.log('arregloNotas',arregloNotas)
//   return ;

// } catch (error) {
//   console.log('error',error)
// }
// }

// export async function mostrarNotas2(userUid){
//   const collectionRef = collection(db, "notes")
//   const q = query(collectionRef, orderBy("date", "desc"));
//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     setNoteList(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, date: doc.data().date?.toDate().getTime() })))

// })
// }