var firebaseConfig = {
    apiKey: "AIzaSyCUBMNiPuiZEdf-WApcqkqWJXUhZlE2Opw",
    authDomain: "event-planner-udaipur.firebaseapp.com",
    projectId: "event-planner-udaipur",
    storageBucket: "event-planner-udaipur.appspot.com",
    messagingSenderId: "234872477923",
    appId: "1:234872477923:web:8e30678efbbd85b8328dd6",
    measurementId: "G-Z379Z6T2NQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  function login(){
      
  let usermail=document.querySelector("#usermail").value;
  let password=document.querySelector("#password").value;

    if(usermail==="admin@eventplanner.com"&&password==="admin@21"){
      document.getElementById("Progress").style.visibility = "visible";
      firebase.auth().signInWithEmailAndPassword(usermail,password)
      .then((userCredential) => {
      //alert("Signed In successfully...Hare Krishna");
      window.location.href="heading.html";
  })
  .catch((error) => {
    document.getElementById("Progress").style.visibility = "hidden";

    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    }
    else if(usermail==="")
      alert("Please fill the Email");
    
    else if(password==="")
      alert("Please fill the Password");

    else if(usermail!="admin@eventplanner.com")
      alert("Admin Email is invalid");
    
    else if(password!="admin@21")
      alert("Admin Password is invalid");
  }

  document.querySelector("#submit").onclick=login;
