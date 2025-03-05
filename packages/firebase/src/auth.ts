import { auth, db } from "./config";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendPasswordResetEmail, 
  User 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Type for user data stored in Firestore
interface UserData {
  name?: string;
  email: string;
  phone?: string;
  photoURL?: string;
  [key: string]: any; // Allows additional optional fields
}

// Register function with Firestore user data save
export const registerUser = async (
  email: string, 
  password: string, 
  userData: UserData
): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user; 

    // Save additional user data in Firestore using UID
    await saveUserData(user.uid, userData);
    
    return user; 
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Save User Details in Firestore
export const saveUserData = async (userId: string, userData: UserData): Promise<void> => {
  try {
    await setDoc(doc(db, "users", userId), userData);
  } catch (error: any) {
    console.error("Error saving user data:", error.message);
  }
};

// Login function
export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; 
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Logout function
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Function to handle Google sign-in
export const signInWithGoogle = async (): Promise<User | { errorCode: string; errorMessage: string; email?: string | null }> => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Check if user exists in Firestore, if not, add them
    const userRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userRef);
    
    if (!userSnapshot.exists()) {
      await setDoc(userRef, { name: user.displayName, email: user.email });
    }

    return user;
  } catch (error: any) {
    console.error("Error signing in with Google:", error.message);
    return {
      errorCode: error.code,
      errorMessage: error.message,
      email: error.customData?.email || null
    };
  }
};

// Request Password Reset
export const requestPasswordReset = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: "Password reset email sent!" };
  } catch (error: any) {
    console.error("Error sending password reset email:", error.message);
    return { success: false, message: error.message };
  }
};
