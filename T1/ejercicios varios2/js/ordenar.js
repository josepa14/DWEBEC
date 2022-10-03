window.onload=function(){
    var contenido=document.getElementById("area");
    var botonNumero = document.getElementById("numeros");
    var botonCadenas = document.getElementById("cadenas");
    var botonFechas = document.getElementById("fechas");


botonNumero.onclick=ordenaNumeros;
botonCadenas.onclick=ordenaCadenas;
botonFechas.onclick=ordenaFechas;

function ordenaNumeros(){
    var array= contenido.value.split("\n");
    array.sort(ordenNumeros);
    contenido.value = array.join("\n");
}
function ordenaCadenas(){
    var array= contenido.value.split("\n");
    array.sort();
    contenido.value = array.join("\n");
}
function ordenaFechas(){
    var array= contenido.value.split("\n");
    array.sort(ordenFecha);
    contenido.value = array.join("\n");
}
}