var firebaseConfig = {
    apiKey: "AIzaSyDcI5TeK2iCwzX3BZrFgP_fRiB5vERbIAU",
    authDomain: "project-94-da7f1.firebaseapp.com",
    projectId: "project-94-da7f1",
    storageBucket: "project-94-da7f1.appspot.com",
    messagingSenderId: "97003834719",
    appId: "1:97003834719:web:910c9482fff34405bcbaea"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addroom()
{
      Room_names = document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", Room_names);
      window.location = "Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div>";
//End code
});});}
getData();

function redirectToRoomName()
{
  localStorage.setItem("room_name", Room_names);
  window.location = "Kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "index.html"
}