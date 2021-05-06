var firebaseConfig = {
    apiKey: "AIzaSyDez6yjppvXAqCzyB1b7nNEyxRQK8CZP-4",
    authDomain: "lets-chat-26dbb.firebaseapp.com",
    projectId: "lets-chat-26dbb",
    storageBucket: "lets-chat-26dbb.appspot.com",
    messagingSenderId: "404955944765",
    appId: "1:404955944765:web:0ee8f2bff4c25f505c5754"
  };
  firebase.initializeApp(firebaseConfig);
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_width_tag="<h4>" + name + "img class='user_tick' src='tick.png'></h4>";
      } });  }); }
getData();
