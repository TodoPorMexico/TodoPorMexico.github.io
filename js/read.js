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

firebase.database().ref('Posts').once('value').then(function(snapshot){
	var PostObject = snapshot.val();
	var keys = Object.keys(PostObject)

	for (var i = 0; i < keys.length; i++) {
		var currentObject = PostObject[keys [i]];
		currentRow = document.createElement('div');
		$(currentRow).addClass("row");
		$(".content").append(currentRow);

		var titulo = document.createElement("h3");
		$(titulo).html(currentObject.Titulo);
		var direccion = document.createElement("h5");
		$(direccion).html(currentObject.Direccion)
		var necesidad = document.createElement("p");
		$(necesidad).html(currentObject.viveres);

		$(currentRow).append(titulo);
		$(currentRow).append(direccion);
		$(currentRow).append(necesidad);
	}
});