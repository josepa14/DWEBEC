//forma es6 de hacer una clase
class Alumno {
    constructor(nombre, apellido1,apellido2) {
      this.nombre = nombre;
      this.apellido1 = apellido1;
      this.apellido2 = apellido2;
    }

    fila() {
        return "<tr><td>"+this.nombre+"</td><td>"+this.apellido1+"</td><td>"+this.apellido2+"</td></tr>";
        
    }
  }

  var obj1=new Alumno("Jose Pablo","mmm","kjgksjdf");
  obj1.fila()