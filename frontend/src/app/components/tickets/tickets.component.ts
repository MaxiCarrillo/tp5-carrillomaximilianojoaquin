import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})

export class TicketsComponent {

  tickets:Array<any>=new Array<any>;

  constructor(private ticketService:TicketService, private router: Router){
    this.getTickets();
  }

  getTickets(){
    this.ticketService.getTickets().subscribe(
      result=>{
        this.tickets = new Array<any>;
        result.forEach((element:any) => {
          let ticket:Ticket = new Ticket();
          Object.assign(ticket, element);
          this.tickets.push(ticket);
        });
      },
      error=>{
        console.log(error);
      }
    );
  }

  getTicketsByCategoria(categoria:string){
    this.ticketService.getTicketsByCategoria(categoria).subscribe(
      result=>{
        this.tickets = new Array<any>;
        result.forEach((element:any) => {
          let ticket:Ticket = new Ticket();
          Object.assign(ticket, element);
          this.tickets.push(ticket);
        });
      },
      error=>{
        console.log(error);
      }
    );

  }

  venderTicket(){
    this.router.navigate(['tickets', 0]);
  }

  modificarTicket(id:string){
    this.router.navigate(['tickets',id]);
  }

  eliminarTicket(id:string){
    this.ticketService.deleteTicket(id).subscribe(
      result=>{
        this.getTickets();
        console.log(result);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
