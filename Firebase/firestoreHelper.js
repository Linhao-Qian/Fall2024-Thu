import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
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
    deleteAllFromDB(`goals/${deletedId}/users`);
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

export async function updateInDB(data, docId, collectionName) {
  try {
    // Both updateDoc and setDoc with {merge: true} can update some fields of a document without overwriting the entire document,
    // but when the document does not exist, updateDoc will fail while setDoc with {merge: true} will create a new document.
    // I think the former is more suitable for the case, so I choose updateDoc.
    await updateDoc(doc(database, collectionName, docId), data);
  } catch (err) {
    console.log("Update in DB ", err);
  }
}

export async function readAllDocs(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(database, collectionName));
    const data = [];
    if (!querySnapshot.empty) {
      querySnapshot.forEach((docSnap) => {
        data.push(docSnap.data());
      });
    }
    return data;
  } catch (err) {
    console.log("get all docs ", err);
  }
}