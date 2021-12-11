const firebaseConfig = {
    apiKey: "AIzaSyAXwvguBVqkkWyzTF4c8GeQIDXRLZuDr_g",
    authDomain: "kwitter-project-c3e42.firebaseapp.com",
    databaseURL: "https://kwitter-project-c3e42-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-c3e42",
    storageBucket: "kwitter-project-c3e42.appspot.com",
    messagingSenderId: "99070095165",
    appId: "1:99070095165:web:628d1faa089ea73ee59f54"
  };

 firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send()
{
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
 document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
          name=message_data['name'];
          message=message_data['message'];
          like=message_data['like'];
          nametag="<h4>"+name+"</h4>";
          messagetag="<h4 class='message_h4'> "+message+"</h4>";
          likebutton="<button class='btn btn-info ' id="+firebase_message_id+" value="+like + " onclick='updatelike(this.like)'>";
          
    } });  }); }
getData();