// Configuración de Firebase (API compat)
const firebaseConfig = {
  apiKey: "AIzaSyCE45asTXxtKUJHr6KPXSD33c5Aaviy5EA",
  authDomain: "mgstudio-cd929.firebaseapp.com",
  projectId: "mgstudio-cd929",
  storageBucket: "mgstudio-cd929.firebasestorage.app",
  messagingSenderId: "1093721779888",
  appId: "1:1093721779888:web:2e23c89746fa879e585575",
  measurementId: "G-KZFBBNF871"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore y exponerlo globalmente
const db = firebase.firestore();

// Log de confirmación
console.log("Firebase inicializado correctamente:", !!firebase.firestore);
