import { Component } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})

export class TransaccionComponent {

  transacciones:Array<Transaccion>;


  constructor(private divisaService:DivisaService){
    this.transacciones = new Array<Transaccion>;
    this.getTransacciones();
  }

  getTransacciones(){
    this.divisaService.getTransacciones().subscribe(
      result=>{
        this.transacciones = new Array<Transaccion>
        result.forEach((element:any) => {
          let transaccion:Transaccion = new Transaccion();
          Object.assign(transaccion, element);
          this.transacciones.push(transaccion);
        });
      },
      error=>{
        console.log(error);
      }
    );
  }

  getTransaccionByMoneda(moneda:string){
    if(moneda!=""){
      this.divisaService.getTransaccionByMoneda(moneda).subscribe(
        result=>{
          this.transacciones = new Array<Transaccion>
          result.forEach((element:any) => {
            let transaccion:Transaccion = new Transaccion();
            Object.assign(transaccion, element);
            this.transacciones.push(transaccion);
          });
        },
        error=>{
          console.log(error);
        }
      );
    }else{
      alert("Debe ingresar la moneda a filtrar");
    }
  }

}
