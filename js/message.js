// Add a new document with a generated id.
import {
  db,
  addDoc,
  collection,
  Timestamp,
  serverTimestamp,
} from "./firebase.js";

async function addDB() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  const docRef = await addDoc(collection(db, "message"), {
    fname: fname,
    lname: lname,
    email: email,
    subject: subject,
    message: message,
    date: serverTimestamp(),
  });
  console.log("Document written with ID: ", docRef.id);
}

document.getElementById("sendMessage__button").addEventListener("click", addDB);
