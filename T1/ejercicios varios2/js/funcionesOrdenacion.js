//funcion que devuelve negativo si el primer numero es anterior, positivo si es posterior y 0 si igual
function ordenNumeros(a,b){
    return a-b;
}
//funcion que devuelve negativo si la primera fecha es anterior, positivo si es posterior y 0 si igual
//formato fecha dd/mm/yyyy
function ordenFecha(a,b){
    var partesA= a.split("/");
    var partesB= b.split("/");
    return partesA[2]-partesB[2] || partesA[1]-partesB[1] || partesA[0]-partesB[0];
}
function ordenarCadenas(){}