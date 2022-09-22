window.onload=function(){
var caja1= document.getElementById("caja1");
var caja2= document.getElementById("caja2");
var boton= document.getElementById("boton");
var texto=document.getElementById("area");
                boton.onclick=function(){
                    var a=caja1.value-0;
                    var b=parseFloat(caja2.value);
                    texto.style.color="red";
                        texto.style.fontSize="3em";
                    if(!isNaN(a) && !isNaN(b)){
                        texto.innerHTML=a+b;
                    }else{
                        texto.innerHTML="Alguno no es un numero"
                        
                    }
                }
            }