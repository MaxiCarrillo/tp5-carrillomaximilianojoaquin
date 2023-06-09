import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

const routes: Routes = [
  {path:"producto", component:ProductoComponent},
  {path:"producto-form/:id", component:ProductoFormComponent},
  {path:"divisa", component:DivisaComponent},
  {path:"transaccion", component:TransaccionComponent},
  {path:"tickets", component:TicketsComponent},
  {path:"tickets/:id", component:TicketFormComponent},
  {path: '', redirectTo: '/producto', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
