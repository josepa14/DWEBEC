//forma clasica de hacer una clase

//constructor que pasand oel puntero al tbody crea una instancia del objeto clase
function Clase(tBody){

    this.tabla = tBody;
    this.alumnos=[];
    this.orden={varaible:"nombre",creciente:true};
}


//metodo para añadir objetos alumnos
Clase.prototype.annade=function(alumno){
    this.alumnos.push(alumno)
}

Clase.prototype.ordena= function(){
    var nombreColumna=this.orden.varaible;
    var orden1=(this.orden.creciente)?1:-1;
    this.alumnos.sort(function(a,b){
        
        return a[nombreColumna].localeCompare(b[nombreColumna])*orden1});
        

}

Clase.prototype.pinta=function(){
    var tbodyInnerHtml = "";
    var tamano= this.alumnos.length;
    for(let i=0; i<tamano;i++){
       // debugger;
        tbodyInnerHtml+= this.alumnos[i].toFila(i);
    }
    this.tabla.innerHTML=tbodyInnerHtml;
}
//metodo que borra alumno segun la posicion definida con Splice

Clase.prototype.borra=function(ind){
    this.alumnos.splice(ind,1);
}
Clase.prototype.edita=function(ind){
 //   document.getElementsByTagName("tfoot")[0].getElementsByTagName("tr")[0].style="display:none"
}