
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD0LiMS6f2aXwZVIiRB6GlMs1aVM-0Acks",
        authDomain: "kwittertest-b89fa.firebaseapp.com",
        databaseURL: "https://kwittertest-b89fa-default-rtdb.firebaseio.com",
        projectId: "kwittertest-b89fa",
        storageBucket: "kwittertest-b89fa.appspot.com",
        messagingSenderId: "966993955437",
        appId: "1:966993955437:web:7c82068085e1f73ccdcd64",
              };
 firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+ user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
         window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" +Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();
 
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";

}