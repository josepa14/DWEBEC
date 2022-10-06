
var clase;

window.onload=function(){
    var tBody =document.getElementById("tBody");
    var boton= document.getElementById("guardar");
    var nombre = document.getElementById("nombre");
    var apellido1 = document.getElementById("apellido1");
    var apellido2 = document.getElementById("apellido2");

    
    
    boton.onclick=function(){
       clase.annade(new Alumno(nombre.value,apellido1.value,apellido2.value));
    clase.pinta();
    nombre.value="";
    apellido1.value="";
    apellido2.value="";
    }
    clase = new Clase(tBody);
}