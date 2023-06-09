import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})

export class TicketFormComponent {

  accion!: string;
  ticket!: Ticket;
  espectadores!: Array<any>;

  constructor(private ticketService: TicketService, private rutaActiva: ActivatedRoute) {
    this.getEspectadores();
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params => {
      if (params['id'] == 0) {
        this.accion = "new";
        this.ticket = new Ticket();
      } else {
        this.accion = "update";
        this.getTicket(params['id']);
      }
    });
  }

  getEspectadores() {
    this.espectadores = new Array<any>;
    this.ticketService.getEspectadores().subscribe(
      result => {
        result.forEach((element: any) => {
          let espectador: any = {};
          Object.assign(espectador, element);
          this.espectadores.push(espectador);
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  getTicket(id: string) {
    this.ticketService.getTicket(id).subscribe(
      result => {
        this.ticket = new Ticket();
        Object.assign(this.ticket, result);
      },
      error => {
        console.log(error);
      }
    );
  }

  venderTicket() {
    this.ticket.fechaCompra = new Date().toLocaleDateString('es-AR');
    this.ticketService.postTicket(this.ticket).subscribe(
      result => {
        console.log("Ticket vendido correctamente");
      },
      error => {
        console.log(error);
      }
    );
  }

  modificarTicket() {
    this.ticketService.putTicket(this.ticket).subscribe(
      result => {
        console.log("Ticket modificado correctamente");
      },
      error => {
        console.log(error);
      }
    );
  }

}

