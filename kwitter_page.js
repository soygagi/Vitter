//TUS ANLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyAQGQ379OsEaLdqw5jVexywpd1fCyDPRPc",
      authDomain: "redsocial-48ed4.firebaseapp.com",
      databaseURL: "https://redsocial-48ed4-default-rtdb.firebaseio.com",
      projectId: "redsocial-48ed4",
      storageBucket: "redsocial-48ed4.appspot.com",
      messagingSenderId: "652918782542",
      appId: "1:652918782542:web:8f296fea8f088cae3da11f"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = document.getElementById("room_name").value;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código

//Termina código
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}