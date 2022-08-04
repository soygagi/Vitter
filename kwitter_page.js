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
      console.log(firebase_message_id);
      console.log(message_data)
      name = message_data['name'];
      message = message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
      message_with_data = "<h4 class='message_h4'" + message + "</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+ " onclick='updatelike(this.id)'>";
      span_width_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
      row = name_with_tag + message_with_data + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
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
function updateLike(message_id)
 {
       console.log("botón Me gusta pulsado - " + message_id);
        button_id = message_id;
         likes = document.getElementById(button_id).value;
         updated_likes = Number(likes) + 1; 
         console.log(updated_likes); 
         firebase.database().ref(room_name).child(message_id).update({ 
            like : updated_likes
       }); }