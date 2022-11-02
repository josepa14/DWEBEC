
function TresEnRaya(contenedor){
    this.posiciones = [[],[],[]];
    this.movimiento = "X";
    this.contenedor = contenedor;
    this.table = null;

}

TresEnRaya.prototype.empezar = function(){
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    table.appendChild("tbody");
    this.table = table;
    table.className ="tresEnRaya"; //esto es para el diseño

    for (let i = 0; i<3;i++){
            var fila = document.createElement("tr");
        for (let i = 0; i<3;i++){
            var columna = document.createElement("td");
            fila.appendChild(columna);
        }
        tbody.appendChild(fila);
    }

}


