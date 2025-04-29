<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCE45asTXxtKUJHr6KPXSD33c5Aaviy5EA",
    authDomain: "mgstudio-cd929.firebaseapp.com",
    projectId: "mgstudio-cd929",
    storageBucket: "mgstudio-cd929.firebasestorage.app",
    messagingSenderId: "1093721779888",
    appId: "1:1093721779888:web:2e23c89746fa879e585575",
    measurementId: "G-KZFBBNF871"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
