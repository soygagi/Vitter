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
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_room.html";
}
function redirect(name){
  localStorage.setItem("room_name",name);
  window.location="index.html";
}