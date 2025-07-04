// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOKz2XUodL29IEPjXtfrioM8tzgd8wO9w",
  authDomain: "authentication-183b4.firebaseapp.com",
  projectId: "authentication-183b4",
  storageBucket: "authentication-183b4.appspot.com",
  messagingSenderId: "1079006258747",
  appId: "1:1079006258747:web:9aa9022b912d64e3b81e1e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// ✅ Save user in localStorage after Google login
const handleGoogleLogin = async (setError, navigate) => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Save name and email
    localStorage.setItem("user", JSON.stringify({
      name: user.displayName,
      email: user.email
    }));

    setError("");
    navigate("/home");
  } catch (error) {
    console.error("Google login failed:", error);
    setError("Google login failed. Please try again.");
  }
};

const handleLogout = async (navigate) => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    navigate("/login");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export { auth, googleProvider, handleGoogleLogin, handleLogout };
