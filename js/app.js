window.addEventListener("load", function() {
	var boton = document.getElementById("tweetear");
	boton.addEventListener("click", function(e) {
        e.preventDefault();
		var texto = document.getElementById("textBox").value;
		newTweet(texto);
        document.getElementById("textBox").value = "";

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