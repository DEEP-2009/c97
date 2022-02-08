var firebaseConfig = {
      apiKey: "AIzaSyA0teVmNvX23BSm0gzjYF_Y2SIVRfcCJQA",
      authDomain: "lets-chat-web-app.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app.firebaseio.com",
      projectId: "lets-chat-web-app",
      storageBucket: "lets-chat-web-app.appspot.com",
      messagingSenderId: "973896176109",
      appId: "1:973896176109:web:1413e9c6eb78df399d97e4",
      measurementId: "G-2TZG2Y5KCH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("welcome").innerHTML = "Welcome" + user_name + "!";

  function addRoomName()
  {
      room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "addRoomName"
        });
        localStorage.setItem("room_name" , room_name);
        window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
 Room_names = childKey;
 //Start code
 row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToRoomName()
{
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}