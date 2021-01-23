
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDwz466ojDsZsLPc1FtHuPKeTBb6hcQC-c",
      authDomain: "kwitter-app-3ca14.firebaseapp.com",
      projectId: "kwitter-app-3ca14",
      storageBucket: "kwitter-app-3ca14.appspot.com",
      messagingSenderId: "709043762623",
      appId: "1:709043762623:web:a9dd4e8b82056e767b9d0a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




    
function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
 {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
