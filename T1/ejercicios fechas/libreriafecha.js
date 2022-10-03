//funcion que devuelve true si una cadena fecha es valida
//false en otro caso
//formato fecha dd/mm/yyyy


function esvalidaFecha(d){
    d
}


//funcion que pasada d Date devuelva una cadena con la fecha española
//funcion fecha texto(d)

function fechaTexto(d){
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const diaS = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
    var fe= new Date();
   var an= d.getFullYear();
   var dia=  d.getDate();
   var mes = monthNames[d.getMonth()];

    return diaS[d.getDay()]+ " , " +dia + " de "+mes+" de "+an;

    // devuelva "lunes 15 de abril de 2022"
}

//funcion que dado un d Date devuelva el dia de la semana en texto
function diaSemanaTexto(d){
    const diaS = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
    return diaS[d.getDay()]
}

//funcion que devuelve una fecha tipo Date pasada una cadenacon formato dd/mm//yyyy
    function fechaTextoDate(d){

        var a= d.split("/");
    debugger;
    return new Date(a[2],a[1]-1,a[0]);
    }

//funcion que devuelve una fecha en texto corto formato dd/mm/yyyy pasado un date

function fechaTextoCorto(d){

    var an= d.getFullYear();
   var dia=  d.getDate();
   var mes = d.getMonth()+1;
   return dia +"-"+mes+"-"+an;
}
//funcion pasar dos dates a ty b devuelve -1 si "a" es
//anterior a "b" 0 si son iguales y +1 en caso contrario
function esFechaAnterior(a,b){

}
//funcion que pasandole una fecha date devuelve true si ha cumplido 18 años
function mayorEdad(fecha){
    var ahora = new Date();
    fecha.setFullYear(fecha.getFullYear()+18);
    if (fecha.getTime()<=ahora.getTime()){
        return "es mayor de edad";
    }else{
        return "es menor de edad";
    }

   
}
//funcion diferencia tiempo entre dos fechas
function tiempoEntre(f1,f2){

}
function doscrifras(m){
    return ((m<10)?"0":"")+m;
}

function escribehora(){
    var h = new Date();
    //document elemeny by id de p
    doscrifras(h.getHours())+":"+
    doscrifras(h.getMinutes())+":"+
    doscrifras(h.getSeconds());
}


window.onload= function(){
    escribehora();
    var temp=setInterval(escribehora,1000);
    var boton= document.getElementById("boton");
    boton.onclick=function(){clearInterval(temp)};
}