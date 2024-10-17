import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
  try {
    // The method addDoc automatically generates a new unique ID for the document,
    // while the method setDoc must specify an ID for the document to create.
    // Given that the goals to add do not have predefined IDs, the method addDoc is more suitable.
    // A specific scenario where setDoc would be appropriate is that we want to set predefined IDs for the goals,
    // or a specific goal needs to be updated or replaced according to its ID.
    const docRef = await addDoc(collection(database, collectionName), data);
    console.log(docRef);
  } catch (err) {
    console.log("Write to DB ", err);
  }
}

export async function deleteFromDB(deletedId, collectionName) {
  try {
    await deleteDoc(doc(database, collectionName, deletedId));
  } catch (err) {
    console.log("Delete from DB ", err);
  }
}

export async function deleteAllFromDB(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(database, collectionName));
    querySnapshot.forEach((docSnapshot) => {
      deleteDoc(doc(database, collectionName, docSnapshot.id));
    })
  } catch (err) {
    console.log("Delete all ", err);
  }
}
