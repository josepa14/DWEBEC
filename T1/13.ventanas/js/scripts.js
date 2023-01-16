window.addEventListener("load", function () {

    var nombre = document.getElementById("nombre");
    var ape = document.getElementById("ape");
    var dni = document.getElementById("dni");
    var boton = document.getElementById("boton");

    boton.onclick = function (ev) {
        ev.preventDefault();
        var ventana = window.open("about:blank", "Diseño Web", "width=300, height=200");
        var cabecera = ventana.document.head;
        var body = ventana.document.body;
        var p = ventana.document.createElement("p");
        p.innerHTML = "YO " + nombre.value +"aaa "+ape.value+" Con DNI "+dni.value+" Me consagro como buen estudiante de la materia de Silverio";
        body.appendChild(p);

        var style = ventana.document.createElement("style");
        style.media="print";
        style.innerHTML='.noimprimible{display: none;}';
        cabecera.appendChild(style);
        
        var imprimir = ventana.document.createElement("button");
       // imprimir.type="button";
        imprimir.innerHTML="IMPRIMIR";
        imprimir.className="noimprimible";
        imprimir.onclick=function(){
        ventana.print();   
        };
        body.appendChild(imprimir);

    }
})