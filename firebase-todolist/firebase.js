import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// se pasa como un objeto
//conexion Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDlURifBrrgFd-xn3lYr5z_gRnf8Kmh0Eo",
  authDomain: "crud-firebase-b7c36.firebaseapp.com",
  projectId: "crud-firebase-b7c36",
  storageBucket: "crud-firebase-b7c36.appspot.com",
  messagingSenderId: "966194593080",
  appId: "1:966194593080:web:2729f6f4d67767b37515cd",
};
const app = initializeApp(firebaseConfig); // inicializo la conversacion con firebase
// se guarda en una variable app
//conexion a firestone
const db =  getFirestore();
export const saveTask =(titulo, descripcion) =>{
    const objetoGuardar = {
        titulo: titulo,
        descripcion: descripcion
    };
    const canasta = collection(db, "task");
    addDoc (canasta, objetoGuardar) 

}

//Ejercicio Elimine y actualice 