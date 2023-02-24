import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PaisesComponent } from './paises/paises.component';

const routes: Routes = [
  { path: 'tabla', component: CuerpoComponent},
  { path: 'paises', component: PaisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
