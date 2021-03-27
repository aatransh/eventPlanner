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
  let tableBody=document.querySelector("#venueBody");

  database.collection("venues").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var data=doc.data();
      var image=data.image;
      var name=data.name;
      var description=data.description;
      var address=data.address;
      var rating=data.rating;
      var rooms=data.rooms;

      const tr=document.createElement('tr');
      const nametd=document.createElement('td');
      const desctd=document.createElement('td');
      const addrtd=document.createElement('td');
      const ratetd=document.createElement('td');
      const roomtd=document.createElement('td');
      const ispan=document.createElement('span');
      const imag=document.createElement('img');

      imag.setAttribute('src',image);
      imag.setAttribute('class','userImg');
      ispan.appendChild(imag);
      nametd.appendChild(ispan);
      nametd.innerHTML=name;
      desctd.innerHTML=description;
      addrtd.innerHTML=address;
      ratetd.innerHTML=rating;
      roomtd.innerHTML=rooms;
      tr.appendChild(nametd);
      tr.appendChild(desctd);
      tr.appendChild(addrtd);
      tr.appendChild(ratetd);
      tr.appendChild(roomtd);

      tableBody.appendChild(tr);


    });
    document.querySelector(".bar").style.visibility = "hidden";
  });
