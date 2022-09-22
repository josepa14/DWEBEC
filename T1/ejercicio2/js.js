window.onload=function(){
var texto1= document.getElementById("area");
var boton= document.getElementById("boton");
var resultado=document.getElementById("resultado");


                boton.onclick=function(){
                var textoPArse = texto1.value.replace(/[,; ]/g,":");    
                var contador = textoPArse.split(":");
                var numero = contador.length
                resultado.innerHTML= numero;

                    }
                }
            