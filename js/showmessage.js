import {
  db,
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  onSnapshot,
  auth,
  signInWithEmailAndPassword,
} from "./firebase.js";

function signIn() {
  var email = document.getElementById("admin_email").value;
  var password = document.getElementById("admin_password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const userCred = userCredential.user;
      showMessage();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

document.getElementById("signin_button").addEventListener("click", signIn);

function showMessage() {
  var messageArr = [];

  async function getData() {
    const q = query(collection(db, "message"), orderBy("date", "desc"));

    onSnapshot(q, (querySnapshot) => {
      messageArr = [];
      messageHTML = "";
      querySnapshot.forEach((doc) => {
        messageArr.push([doc.id, doc.data()]);
        displayMessage(messageArr);
        console.log(doc.id, " => ", doc.data());
      });
    });
  }

  getData();

  console.log(messageArr);

  var messageHTML = "";

  const displayMessage = (messages) => {
    messageHTML = messages
      .map((message) => {
        return `<div class="message">
        <div class="message__top">
        <div class="message__topLeft">
          <p class="username">Name: ${message[1].fname} ${message[1].lname}</p>
          <p class="email">email: <a href="mailto:${message[1].email}">${message[1].email}</a></p>
          <h4 class="subject">Subject: ${message[1].subject}</h4>
        </div>
        <p class="deleteButton" data-id="${message[0]}" onclick="deleteData(this)">DELETE</p>
        </div>
        <div class="message__bottom">
          <div class="mainbody">${message[1].message}</div>
        </div>
      </div>`;
      })
      .join("");
    document.querySelector(".all__messages").innerHTML = messageHTML;
  };
}

async function deleteData(element) {
  var id = element.getAttribute("data-id");

  await deleteDoc(doc(db, "message", id));
  console.log(id);
}

export { deleteData };
