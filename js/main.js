function agregarMensaje(texto){
	var pub =document.createElement("p");
	pub.innerText = texto;
	var contenedor = document.getElementById("contenedor");
	contenedor.insertBefore(pub,contenedor.childNodes[0]);
	document.getElementById("txt").value = "";
	agregarHora(pub);
	}
	function autosize(){
  	var el = this;
  		setTimeout(function(){
		    el.style.cssText = 'height:auto';
		    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  	},0);
	}
	function resize(){
		txtArea.style.cssText = 'height:auto';
	}
	function agregarHora(tweet){
		var fecha = new Date();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
            if (minuto < 10) {
                minuto = "0" + minuto;
            }
        var horaImprimible = hora + " : " + minuto + " : ";
        var hora = document.createElement("div");
		hora.innerText = horaImprimible;

		tweet.insertBefore(hora,tweet.childNodes[0]);  
    }