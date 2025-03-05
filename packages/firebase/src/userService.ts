import { db } from "./config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

// Define UserData type (Modify this based on your Firestore user schema)
export interface UserData {
  name?: string;
  email?: string;
  phoneNumber?: string;
  profileImage?: string;
  [key: string]: any; // Allows additional optional properties
}

// Fetch user data function
export const fetchUserData = async (userId: string): Promise<UserData | null> => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      return userSnapshot.data() as UserData; // Type assertion to UserData
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Update user data function
export const updateUserData = async (userId: string, updatedData: Partial<UserData>): Promise<void> => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, updatedData);
    console.log("User data updated successfully!");
  } catch (error) {
    console.error("Error updating user data:", error);
  }
};
