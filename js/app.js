window.addEventListener("load", function() {
    var color = ["violet","turquesa","red"];
    var maximo = [120, 130, 140];
	var boton = document.getElementById("tweetear");
    boton.disabled = true; //Por defecto

	boton.addEventListener("click", function(e) {
        e.preventDefault();
        //var textArea = document.getElementById("textBox");
		var texto = document.getElementById("textBox");
		newTweet(texto.value);
        texto.value = "";
        contador.textContent = "140";
        boton.disabled = true;

	});

	function newTweet (texto) {
        var tweet = document.createElement("div");
        tweet.innerHTML = texto;
        tweet.className = "tweetDiv";
        var contenedor = document.getElementById("contenedor");

        if(!contenedor.childNodes[0]){
            contenedor.appendChild(tweet);
        } else {
            contenedor.insertBefore(tweet,contenedor.childNodes[0]);
        }
        agregarHora(tweet);
	}
    function agregarHora(nuevo){
        var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
            if (minuto < 10) {
                minuto = "0" + minuto;
            }
        var horaImprimible = hora + " : " + minuto + " " ;
        var hora = document.createElement("span");
        hora.innerText = horaImprimible;

        nuevo.insertBefore(hora,nuevo.childNodes[0]); 
    }


    textBox.addEventListener("keyup", function() {
        boton.disabled = false;
        countAndColor(maximo, color);
        countEnter(text);
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
    
    function countEnter(text){
        var text = document.getElementById("textBox").value;
        var textSinEspacios = text.trim().length;
        var espacios = text.match(/\n/g);
        var cantEnters = espacios.length;
        
        if(textSinEspacios === 0){
            boton.disabled = true; 
        }
        if(cantEnters > 1){
            text.setAttribute("rows", cantEnters);
        }
    }
    
    var textarea = document.querySelector("textarea");
    textarea.addEventListener("keypress", autosize);
             
    function autosize(){
        var el = this;
        setTimeout(function(){
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
    }
});

 