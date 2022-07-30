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
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}