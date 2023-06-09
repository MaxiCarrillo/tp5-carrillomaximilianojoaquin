import { Component } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { Transaccion } from 'src/app/models/transaccion';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})

export class DivisaComponent {

  transaccion!:Transaccion;
  monedas!:Array<Moneda>;

  constructor(private divisaService:DivisaService){
    this.transaccion = new Transaccion();
    this.getCodigosInternacionales();
  }

  getCodigosInternacionales(){
    this.divisaService.getMonedas().subscribe(
      result=>{
        this.monedas = new Array<Moneda>();
        result.forEach((element:any)=>{
          let moneda:Moneda = new Moneda();
          Object.assign(moneda, element);
          this.monedas.push(moneda);
        });
      },
      error=>{
        console.log("Error en la peticion");
      }
    );
  }

  cotizar(){
    this.divisaService.convertir(String(this.transaccion.cantidadOrigen),this.transaccion.monedaOrigen,this.transaccion.monedaDestino).subscribe(
      result=>{
        this.transaccion.cantidadDestino = parseFloat(result.result);
        this.transaccion.tasaConversion =  this.transaccion.cantidadDestino/this.transaccion.cantidadOrigen;
        console.log(this.transaccion);
        this.crearTransaccion();
      },
      error=>{
        alert("Error en la peticion");
      }
    );
  }

  crearTransaccion(){
    this.divisaService.postTransaccion(this.transaccion).subscribe(
      result=>{
        alert("Transaccion Realizada");
        console.log(result);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
