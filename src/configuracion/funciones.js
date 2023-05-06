import { auth } from "./firebaseConfig";


export async function logout() {
    await auth.signOut();
  }