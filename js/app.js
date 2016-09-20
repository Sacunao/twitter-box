window.addEventListener("load", function() {
    var color = ["violet","turquesa","red"];
    var maximo = [120, 130, 140];

	var boton = document.getElementById("tweetear");
    boton.disabled = true; //Por defecto
	boton.addEventListener("click", function(e) {
        e.preventDefault();
        var textArea = document.getElementById("textBox");
		var texto = textArea.value.trim();
		newTweet(texto);
        textArea.value = "";
        contador.textContent = "140";
        boton.disabled = false;

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
    
    textBox.addEventListener("keyup", function() {
        boton.disabled = false;
        countAndColor(maximo, color);
        countEnter();
	});
    
    
    function countAndColor(maximo, color){
        var limite = 140;
        var textValue = document.getElementById("textBox").value;
        var largo = textValue.length;
        var contador =  document.getElementById("contador");
        contador.innerHTML = limite - largo;

        if(largo >= maximo[0] && largo < maximo[1]) {  //largo >= 120 y largo < 130
                contador.classList.remove(color[1]);
                contador.classList.add(color[0]);
        } else if(largo >= maximo[1] && largo < maximo[2]) {  //largo >= 130 y largo < 140
                contador.classList.remove(color[0]);
                contador.classList.remove(color[2]);
                contador.classList.add(color[1]);	
        } else if(largo >= maximo[2]){//largo >= 140
                contador.classList.remove(color[1]);
                contador.classList.add(color[2]);
                boton.disabled = true;
        } else {
                for(var i = 0; i < maximo.length-1; i++){
                    contador.classList.remove(color[i]);		
                };
        }     
    } 
    
    function countEnter(){
        var text = document.getElementById("textBox");
        var textSinEspacios = text.value.trim().length;
        var espacios = text.value.match(/\n/g);
        var cantEnters = espacios.length;
        
        if(textSinEspacios === 0){
            boton.disabled = true; 
        }
        if(cantEnters > 4){
            text.setAttribute("rows", cantEnters);
        }
        
  
    }
});
