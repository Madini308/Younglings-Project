// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyDdtuGM-XJmbUJGlvl09OAIIo5Yz8_0QGs",
    authDomain: "contact-form-e6293.firebaseapp.com",
    databaseURL: "https://contact-form-e6293.firebaseio.com",
    projectId: "contact-form-e6293",
    storageBucket: "contact-form-e6293.appspot.com",
    messagingSenderId: "731541697257",
    appId: "1:731541697257:web:2d6a9852a54538a8f97678",
    measurementId: "G-1N5FJWQB33"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var phone = getInputVal('phone');
    var email= getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(firstname, lastname, phone, email, message);
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(firstname, lastname, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstname:firstname,
      lastname:lastname,
      phone:phone,
      email:email,
      message:message
    });
  }