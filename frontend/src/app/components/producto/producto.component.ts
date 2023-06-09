import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  productos!:Array<Producto>;

  constructor(private productoService:ProductoService){
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProductosDestacados().subscribe(
      result=>{
        this.productos = new Array<Producto>;
        result.forEach((element:any) => {
          let producto:Producto = new Producto();
          Object.assign(producto, element);
          this.productos.push(producto);
        });
      },
      error=>{
        console.log(error);
      }
    );
  }
}
