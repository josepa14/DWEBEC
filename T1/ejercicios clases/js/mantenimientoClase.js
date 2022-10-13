
var clase;

function programaGuardar(ind){
    return 
}

function editar(ind){
    var nombre = document.getElementById("eDnombre");
    var apellido1 = document.getElementById("eDapellido1");
    var apellido2 = document.getElementById("eDapellido2");
    var botonEd= document.getElementById("eDGuardar");
    var insertar= document.getElementById("insertar");
    var teditaT= document.getElementById("editar");
    
    insertar.style="display:none"; 
    teditaT.style="";
    console.log("aqui llego");


    var alumno=clase.alumnos[ind];
    nombre.value=alumno.nombre;
    apellido1.value=alumno.apellido1;
    apellido2.value=alumno.apellido2;
    botonEd.onclick=function(){
        clase.alumnos[ind].nombre=nombre.value;
        clase.alumnos[ind].apellido1=apellido1.value;
        clase.alumnos[ind].apellido2=apellido2.value;
        console.log("aqui no llego");
        clase.pinta();
        clase.ordena();
        teditaT.style="display:none";
        insertar.style="";
        
    }
   

    }

window.onload=function(){
    var tBody =document.getElementById("cuerpo");
    var boton= document.getElementById("guardar");
    var nombre = document.getElementById("nombre");
    var apellido1 = document.getElementById("apellido1");
    var apellido2 = document.getElementById("apellido2");
    var btnOrdnCreciente = document.getElementById("ordenNombreCreciente");
    var ordApeCreciente = document.getElementById("ordenApeCreciente");
    var ordApe2Creciente = document.getElementById("ordenApe2Creciente");
    var btnOrdnDecreciente = document.getElementById("ordenNombreDeCreciente");
    var ordApeDeCreciente = document.getElementById("ordenApeDeCreciente");
    var ordApe2DeCreciente = document.getElementById("ordenApe2DeCreciente");

    
    btnOrdnCreciente.onclick=function(){
        clase.orden.variable="nombre";
        clase.orden.creciente=true;
        clase.ordena();
        clase.pinta();
    }
    ordApeCreciente.onclick=function(){
        clase.orden.variable="apellido1";
        clase.orden.creciente=true;
        clase.ordena();
        clase.pinta();
        }
    ordApe2Creciente.onclick=function(){
        clase.orden.variable="apellido2";
        clase.orden.creciente=true;
        clase.ordena();
        clase.pinta();;
    }
    btnOrdnDecreciente.onclick=function(){
        clase.orden.variable="nombre";
        clase.orden.creciente=false;
        clase.ordena();
        clase.pinta();
        }
    ordApeDeCreciente.onclick=function(){
            clase.orden.variable="apellido1";
            clase.orden.creciente=false;
            clase.ordena();
            clase.pinta();
            }
    ordApe2DeCreciente.onclick=function(){
            clase.orden.variable="apellido2";
            clase.orden.creciente=false;
            clase.ordena();
            clase.pinta();;
        }
        


    
    boton.onclick=function(){
    clase.annade(new Alumno(nombre.value,apellido1.value,apellido2.value));
    clase.ordena();
    clase.pinta();
    nombre.value="";
    apellido1.value="";
    apellido2.value="";
    nombre.focus();
    }
    clase = new Clase(tBody);
}