window.addEventListener("load", function() {
	var boton = document.getElementById("tweetear");
	boton.addEventListener("click", function(e) {
        e.preventDefault();
        var textArea = document.getElementById("textBox")
		var texto = textArea.value;
		newTweet(texto);
        textArea.value = "";

	});

	function newTweet (texto) {
        var tweet = document.createElement("div");
        tweet.className = "tweetDiv";
        var contenedor = document.getElementById("contenedor");
        tweet.innerText = texto;
        
        if(!contenedor.childNodes[0]){
            contenedor.appendChild(tweet);
        } else {
            contenedor.insertBefore(tweet,contenedor.childNodes[0]);
        }
	}
});