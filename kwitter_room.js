var firebaseConfig = {
      apiKey: "AIzaSyBPjrt_PmLsLI24atqxZE6mVCkA4Hz2A64",
  authDomain: "vitter-3670e.firebaseapp.com",
  databaseURL: "https://vitter-3670e-default-rtdb.firebaseio.com",
  projectId: "vitter-3670e",
  storageBucket: "vitter-3670e.appspot.com",
  messagingSenderId: "464339231305",
  appId: "1:464339231305:web:6fb4819c68be53b1695598"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Bienvenido "+ user_name +"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
