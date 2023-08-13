var firebaseConfig = {
    apiKey: "AIzaSyDrjjxDYocHlB4y_lX2Z3vifc_wFbPm4s4",
    authDomain: "classtest-5fa59.firebaseapp.com",
    databaseURL: "https://classtest-5fa59-default-rtdb.firebaseio.com",
    projectId: "classtest-5fa59",
    storageBucket: "classtest-5fa59.appspot.com",
    messagingSenderId: "248412615067",
    appId: "1:248412615067:web:dcb3341a134cfa946f313e"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name = localStorage.getItem("room_name");
    username = localStorage.getItem("username")

    function send(name)
    {
        firebase.database().ref(room_name).push
        ({
            name:username,
            message:msg,
            like:0
        });
    }