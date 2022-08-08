//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBE1cCthPm9B7pXO9FfRzkVQZ6WyWyaI4w",
      authDomain: "kwitter-32fb7.firebaseapp.com",
      databaseURL: "https://kwitter-32fb7-default-rtdb.firebaseio.com",
      projectId: "kwitter-32fb7",
      storageBucket: "kwitter-32fb7.appspot.com",
      messagingSenderId: "700836887153",
      appId: "1:700836887153:web:1500cc2c869854f7fb39d0"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
      document.getElementById("msg").value="";
}

