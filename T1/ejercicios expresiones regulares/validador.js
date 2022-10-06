//funcion que valida cadena no vacia

function noVacio(cadena){
    return (/^.*[^ \t]+.*$/gm).test(cadena);
}
function validaNombre(cadena){
    return (/[\wñáéíóú]/g).test(cadena)
}

function validaDNI(cadena){
    const letras="TRWAGMYFPDXBNJZSQVHLCKE";
    const partes=/^(\d{7,8})([TRWAGMYFPDXBNJZSQVHLCKE])$/.exec(cadena.toUpperCase());
    return partes !== null && letras.charAt(partes[1]%23) == partes[2];
}


function validaPuertas(cadena){
    return(/^[1-5]$/).test(cadena)
}



var nombre=document.getElementById("nombre");
var apellidos=document.getElementById("apellidos");
var dni=document.getElementById("dni");
var direccion=document.getElementById("direccion");
var cp=document.getElementById("cp");
var localidad=document.getElementById("localidad");
var provincia=document.getElementById("provincia");
var fecha=document.getElementById("fecha");
var carnet=document.getElementById("carnet");
var antiguedad=document.getElementById("antiguedad");
var noSiniestros=document.getElementById("noSiniestros");
var fMatriculacion=document.getElementById("fMatriculacion");
var bastidor=document.getElementById("bastidor");
var marca=document.getElementById("marca");
var cilindrada=document.getElementById("cilindrada");
var puertas=document.getElementById("puertas");





nombre.style.border="1 px solid red";