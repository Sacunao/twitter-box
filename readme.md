##EJERCICIO TWITTER-BOX

Tener un contenedor vacío que acumule los mensajes.

####v0.0.1

#####Generar Versiones de Twitter.

1. Formulario: TextArea y Botón.
2. Evento para el click del botón 
3. Dentro del evento, obtener el valor del textarea.
4. Darle formato al texto del TextArea.
5. Agregar el texto formateado al contenedor.

* Utilizamos función de creación de nuevos elementos para que se agregue nuestro Tweet *

```javascript
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
```
![Imagen](http://4.1m.yt/rupm60j.png "Imagen")

####v0.0.2 y v0.0.3

#####Deshabilitar botón y cambio de color de caracteres

1. Deshabilitar el botón cuando hay texto vacio.
2. Contar máximo 140 carácteres de forma regresiva.

1. Si pasa los 140 caracteres, deshabilitar el botón. 
2. Si pasa los 120 caracteres, mostrar el contador con OTRO color.
3. Si pasa los 130 caracteres, mostrar el contador con OTRO color. 
4. si pasa los 140 caracteres, mostrar el contador en negativo.

* Utilizamos función que limite la cantidad de caracteres y de paso poner las restricciones de camio de colores, para volver mi codigo reutilizable usaré arrays *

Arrays de clases de css que contienen color del texto y array con limites de carácteres

```javascript
  	
    var color = ["violet","turquesa","red"];
    var maximo = [120, 130, 140];
```

Función para agregar colores, y remover clases.

```javascript
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
                contador.classList.remove(color[0]);
                contador.classList.add(color[2]);
                boton.disabled = true;
        } else {
                for(var i = 0; i < maximo.length-1; i++){
                    contador.classList.remove(color[i]);		
                };
        }     
    } 
```

Color negro por deafult:

![Imagen](http://1.1m.yt/lAGlrtW.png "Imagen")

Color morado a partir de 120 caracteres:

![Imagen](http://2.1m.yt/eD48TcS.png "Imagen")

Color turquesa a partir de 130 caracteres:

![Imagen](http://1.1m.yt/fWLW0ql.png "Imagen")

Color rojo a partir de 140 caracteres:

![Imagen](http://1.1m.yt/mOWQZDJ.png "Imagen")

####v0.0.4

1. Al presionar enter ("/n") que crezca el textarea de acuerdo al tamaño del texto.

* Utilizamos una función que haga crecer el textarea según la cantidad de Enters que contiene, también debemos validar que si por más que tenga enters  no lo cuente como un caracter y el boton este deshabilitado. *

```javascript
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
```

![Imagen](http://3.1m.yt/KS4ktKI.png "Imagen")

####v0.0.5

1. Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll. (Si en caso aplica).

* Utilizamos una función que modifique a traves del estilo el padding y la altura del textarea *

```javascript
  	function autosize(){
        var el = this;
        setTimeout(function(){
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        },0);
    }
```

![Imagen](http://4.1m.yt/9txHPUf.png "Imagen")

####v0.0.6

1.Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm

```javascript
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
```

![Imagen](http://2.1m.yt/u9RgD1.png "Imagen")


