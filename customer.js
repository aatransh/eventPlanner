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

  let database=firebase.firestore();
  let tableBody=document.querySelector("#tableBody");

  database.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var data=doc.data();
        var image=data.image;
        var name=data.name;
        var email=data.email;
        var contact=data.contact;

        const tr=document.createElement('tr');
        const nametd=document.createElement('td');
        const mailtd=document.createElement('td');
        const phonetd=document.createElement('td');
        const ispan=document.createElement('span');
        const imag =document.createElement('img');
        
        //imag.setAttribute("src","cap1.PNG");
        imag.src=image;
        imag.setAttribute("class","userImg");
        
        ispan.appendChild(imag);
        nametd.appendChild(ispan);
        nametd.innerHTML=name;
        mailtd.innerHTML=email;
        phonetd.innerHTML=contact;
        tr.appendChild(nametd);
        tr.appendChild(mailtd);
        tr.appendChild(phonetd);

        tableBody.appendChild(tr);
    });
    
    document.querySelector(".bar").style.visibility = "hidden";
});
