const firebaseConfig = {
      apiKey: "AIzaSyAXwvguBVqkkWyzTF4c8GeQIDXRLZuDr_g",
      authDomain: "kwitter-project-c3e42.firebaseapp.com",
      projectId: "kwitter-project-c3e42",
      storageBucket: "kwitter-project-c3e42.appspot.com",
      messagingSenderId: "99070095165",
      databaseURL: "https://kwitter-project-c3e42-default-rtdb.firebaseio.com",
      appId: "1:99070095165:web:628d1faa089ea73ee59f54"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+  user_name;

 function addroom()
 {
     room_name= document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
     localStorage.setItem("room_name",room_name);
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
       row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;
   });});}
getData();

function redirecttoroomname(name)
{
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}