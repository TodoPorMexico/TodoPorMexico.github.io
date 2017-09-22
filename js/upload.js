// Initialize Firebase
var config = {
   apiKey: "AIzaSyAOGKFUL4RM90LXgCx-1Sj0vqBMwNDDGMs",
   authDomain: "fuerza-meximo.firebaseapp.com",
   databaseURL: "https://fuerza-meximo.firebaseio.com",
   projectId: "fuerza-meximo",
   storageBucket: "fuerza-meximo.appspot.com",
   messagingSenderId: "1058023344772"
};

firebase.initializeApp(config);

var upload_button = document.getElementById('postUpload');

upload_button.addEventListener('click', function(){
	var centro_de_acopio = document.getElementById('Nombre').value;
	var direccion = document.getElementById('Direccion').value;
	var viveres = document.getElementById('listaDeViveres').value;

	var postKey = firebase.database().ref('/Posts').push().key;
	var updates = {};
	var postData = {
		Titulo: centro_de_acopio,
		Direccion: direccion,
		viveres: viveres
	};

	updates['Posts/'+postKey] = postData;
	firebase.database().ref().update(updates);

});