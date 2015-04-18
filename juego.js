// capturamos nombre del jugador
var jugador = prompt("Bienvenido. Ingresa tu nombre para comenzar a jugar:");
// buscamos un numero aleatorio entre 1 y 200
var numeroAdivinar=Math.floor((Math.random()*200)+1);
//En caso de q queramos saber el numero descomentareamos la linea 6
// alert(numeroAdivinar);
var contadorRespuestas=0;

function adivinar()
{
            // obtenemos el numero de respuestas posibles
            var numeroRespuestas=document.getElementById("numeroRespuestas").value;
            
            if(document.getElementById("numeroRespuestas").disabled==false)
            {
            	if(isNumber(numeroRespuestas) && numeroRespuestas>0)
            	{
            		document.getElementById("numeroRespuestas").disabled=true;
            		document.getElementById("numero").disabled=false;
            		document.getElementById("numero").focus();
            	}
            }else{
                // obtenemos el contenido del div que contiene las respuestas
                var respuestas=document.getElementById("respuestas").innerHTML;

                if(contadorRespuestas<numeroRespuestas)
                {
                    // obtenemos el numero introducido por el usuario
                    var numero=document.getElementById("numero").value;
                    
                    if(isNumber(numero) && numero>0 && numero<200)
                    {
                        // aumentanos el numero de la respuesta dada
                        contadorRespuestas+=1;
                        
                        if(numero>numeroAdivinar)
                        {
                            // El numero es superior
                            
                            // Añadimos un texto a las respuestas
                            respuestas+="<br>"+numero+" - El numero que buscas es inferior";
                            document.getElementById("numero").focus();
                        }else if(numero<numeroAdivinar){
                            // El numero es inferior
                            
                            // Añadimos un texto a las respuestas
                            respuestas+="<br>"+numero+" - El numero que buscas es superior";
                            document.getElementById("numero").focus();
                        }else{
                            // has acertado
                            
                            // Añadimos un texto a las respuestas
                            respuestas+="<br><span class='acertado'>"+numero+" - HAS ACERTADO!!</span>";
                            alert("Felicitaciones "+jugador+"!!! El numero a adivinar era el "+numero);
                            fin()
                        }
                        // vaciamos el valor del numero
                        document.getElementById("numero").value="";
                    }else{
                    	respuestas+="<br><span class='error'>"+numero+" - Tiene que ser un valor numerico comprendido entre 1 y 200</span>";
                    }
                }else{
                	respuestas+="<br><span class='fin'>NO HAS ACERTADO!! El numero era el "+numeroAdivinar+"</span>";

                	fin()
                }
                
                // ponemos nuevamente todas las respuestas
                document.getElementById("respuestas").innerHTML=respuestas;
            }
            
            // devolvemos false para que el formulario no envie los valores
            return false;
        }
        
        // Funcion que se ejecuta al finalizar el juego
        // ya sea por haber descubierto el numero o por finalizar el numero de
        // intentos
        function fin()
        {
            // deshabilitamos el casilla de entrar al numero, y el
            // boton de enviar
            document.getElementById("numero").disabled=true;
            document.getElementById("btnEnviar").disabled=true;
        }
        
        
        function isNumber(n)
        {
        	return !isNaN(parseFloat(n)) && isFinite(n);
        }
