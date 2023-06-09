import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { DivisaComponent } from './components/divisa/divisa.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    FooterComponent,
    ProductoFormComponent,
    DivisaComponent,
    TransaccionComponent,
    TicketsComponent,
    TicketFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
