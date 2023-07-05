import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import creds from "../cred.js"


//connects us to firebase project
initializeApp({
    credential: cert(creds)
})

export default getFirestore() //connects to our DB


