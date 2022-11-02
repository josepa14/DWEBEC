//prototipo que pro defecto las tablas estan desactivadas

HTMLTableElement.prototype.activadaEdicion=false;


//Metodo que convierte una tabla en editar es decir, al pulsar en la cabecera activa la edicion.

HTMLTableElement.prototype.editable = function(){
    var tabla = this;
    var tHead = tabla.querySelector("thead");
    tHead.addEventListener("dbclick",function(){
        if(!this.activadaEdicion){
        tabla.editar();
        }else{
            tabla.desEditar();
        }
        tabla.activadaEdicion=!tabla.activadaEdicion;
    })
}

//metodo que añade la columna de edicion

HTMLTableElement.prototype.editar = function(){
    var tabla = this;
    var tHead = tabla.querySelector("thead");
    var tBody = tabla.querySelector("tbody");
    
    var th = document.createElement("th");
    th.setAttribute("rowspan",tHead.rows.length);
    th.className="AutomaticCreateByEditable";
    th.innerHTML="Edicion";
    //forma 1
    tHead.children[0].appendChild(th);
    for(let i = 0; i< tBody.rows.length; i++){
        let celda = document.createElement("td");
        celda.className="AutomaticCreateByEditable";
        tBody.rows[i].appendChild(celda);
    }
   
}
HTMLTableElement.prototype.deseditar = function(){
    var tabla = this;
    var tdsMios=this.getElementsByClassName("AutomaticCreateByEditable");
    var tamano = tdsMios.length;
    for (let i=0;i<tamano;i++){
        tdsMios[0].parentElement.removeChild(tdsMios[i]);
    }
}
HTMLTableRowElement.prototype.subir = function(){
    var anterior = this.previousElementSibling;
    if (anterior !== null){
        this.parentElement.insertBefore(this,anterior);

    }
}
HTMLTableRowElement.prototype.bajar = function(){
    var siguiente = this.nextElementSibling;
    if (siguiente !== null){
        this.parentElement.insertBefore(siguiente,this);

    }
}
HTMLTableRowElement.prototype.eliminar = function(){
    this.parentElement.removeChild(this)

}
HTMLTableRowElement.prototype.editar = function(){
   var celdas = this.cells;
   var tamano = celdas.length;
   for(let i = 0; i<tamano;i++){
    if(celdas[i].className!==("AutomaticCreateByEditable")){
        celdas[i].editar();
    }
   }
}
HTMLTableCellElement.prototype.editar= function(){
    if( this.estaEditada === false|| this.estaEditada === undefined ){
        var txtValor = document.createElement("input");
        txtValor.type="text";
        txtValor.value = this.innerHTML;
        this.innerHTML="";
        this.estaEditada= true;
        this.appendChild(txtValor);
    }
}
