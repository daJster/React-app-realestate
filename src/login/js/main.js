import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFTG5ddAEkQN5dZsphMNAlGHLsLToCW5g",
  authDomain: "neodon-64dec.firebaseapp.com",
  projectId: "neodon-64dec",
  storageBucket: "neodon-64dec.firebasestorage.app",
  messagingSenderId: "417024437876",
  appId: "1:417024437876:web:fbb1c540ea2a4504672b21",
  measurementId: "G-3993LQ7YK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// DOM Elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const createAccountButton = document.getElementById("create-account");
const messageBox = document.getElementById("message");


async function saveUser(email, uid) {
    try {
        await setDoc(doc(db, "Users", uid), {
        email: email,
        createdAt: new Date().toISOString(),
        });
        console.log("User data saved successfully!");
    } catch (error) {
        console.error("Error saving user data:", error);
    }
}




async function checkUserExists(email) {
    const userRef = doc(db, "Users", email);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        console.log("User already exists:", userSnap.data());
        return true;
    } else {
        console.log("User does not exist.");
        return false;
    }
}

createAccountButton.addEventListener("click", async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  messageBox.textContent = "";

  // Validate inputs
  if (!email || !password || !confirmPassword) {
    messageBox.textContent = "All fields are required.";
    return;
  }

  if (password !== confirmPassword) {
    messageBox.textContent = "Passwords do not match.";
    return;
  }

  try {
    // Check if email already exists in Firestore
    if (await checkUserExists(email)) {
      messageBox.textContent = "Email already exists.";
      return;
    }

    // Create the user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user to Firestore
    await saveUser(email, user.uid);
    messageBox.textContent = "Account created successfully!";
  } catch (error) {
    console.error("Error:", error);
    messageBox.textContent = `Error: ${error.message}`;
  }
});