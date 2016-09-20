window.addEventListener("load", function() {
	var boton = document.getElementById("tweetear");
    boton.disabled = true; //Por defecto
	boton.addEventListener("click", function(e) {
        e.preventDefault();
        var textArea = document.getElementById("textBox");
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
    textBox.addEventListener("keypress", function() {
        boton.disabled = false;
        count();
	});
     function count(maximo){
        var maximo = 140;
        var textValue = document.getElementById("textBox").value
        var largo = textValue.length;
        var contador =  document.getElementById("contador");
        contador.innerHTML = maximo-largo;
        if(largo >= maximo) { 
              contador.classList.add("red");
              boton.disabled = true; 
        } else { 
              contador.classList.remove("red");
        }   
     }    
});