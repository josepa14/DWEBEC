
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
    var guardarTabla = document.getElementById("guardarDatos");
    var leerTabla= document.getElementById("leerDatos");

    
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

    guardarTabla.onclick=function(){
        window.alert("guardando tabla");
        var datos = [];
        for(let i = 0; i < tBody.rows.length;i++){
            datos[i] = [];
            //debugger;
            for (let j = 0; j < tBody.rows[i].cells.length;j++){
                datos[i].push(tBody.rows[i].cells[j].textContent)
            }

        }
        localStorage.setItem("tabla",JSON.stringify(datos));
    }
    leerTabla.onclick=function(){

    clase.limpiar();

    
      let datos=JSON.parse(localStorage.getItem("tabla"));
      let filas = datos.length;
      for (let i = 0; i < filas; i++){
        clase.annade(new Alumno(datos[i][0],datos[i][1],datos[i][2]));
    }
    clase.pinta();

    }





    clase = new Clase(tBody);





}
