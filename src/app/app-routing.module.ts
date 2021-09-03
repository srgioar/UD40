import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: 'contenido', component: ContenidoComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'detalle', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
