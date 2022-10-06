//forma clasica de hacer una clase

function Clase(tbody){

    this.tabla = tBody;
    this.alumnos=[];
}
//preguntar ppr prototype
Clase.prototype.annade=function(alumno){
    this.alumnos.push(alumno)
}