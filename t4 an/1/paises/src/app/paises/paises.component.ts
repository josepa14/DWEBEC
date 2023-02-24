import { Component } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  libros:string[] = ["libro1","libro2","libro3"];

  intro = "ESP";

  temperaturas:string[] = [];

  paises:string[] = [];

  constructor(private service: PaisesService) {
    this.temperaturas=service.messages;
   }

   pulsado(event:any){
    this.intro=event.target.value;
    if(this.intro.length>=3){
      this.buscarPaises(this.intro);

    }

    //console.log(event.targer.value);
   }

   buscarPaises(cadena:String){

    this.service.obtenerPaises(cadena).subscribe(data => {
      this.paises=[];
      for(let i=0;i<data.length;i++)
      this.paises.push(data[i].name.common)
    },
    error => {
      console.log("ERROR EN EL CLIENTE");
    });
   }
   cargarPaises(){
    this.service.obtener().subscribe(data => {
      for(let i=0;i<data.length;i++)
      this.paises.push(data[i].name.common)
    },
    error => {
      console.log("ERROR EN EL CLIENTE");
    });
   }
}
