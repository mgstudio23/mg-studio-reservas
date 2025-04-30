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

// Inicializar Firestore
const db = firebase.firestore();

// Configurar caché para mejorar rendimiento offline
db.enablePersistence({synchronizeTabs: true})
  .catch(err => {
    if (err.code === 'failed-precondition') {
      // Múltiples pestañas abiertas
      console.warn('La persistencia de datos solo funciona en una pestaña a la vez');
    } else if (err.code === 'unimplemented') {
      // Navegador no compatible
      console.warn('El navegador no soporta persistencia de datos offline');
    }
  });

// Exportar las instancias para uso en otros archivos
// (Aunque en la API compat, estas están disponibles globalmente)
