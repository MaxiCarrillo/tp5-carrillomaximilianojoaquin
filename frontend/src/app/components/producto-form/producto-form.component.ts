import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})

export class ProductoFormComponent {

  producto!: Producto;

  constructor(private productoService: ProductoService) {
    this.producto = new Producto();
  }

  crearProducto() {
    this.productoService.postProducto(this.producto).subscribe(
      result => {
        console.log("Se ha guardado un producto correctamente");
      },
      error => {
        console.log(error);
      }
    );
  }

  onFileSeleccionado(event: any) {
    const file = event.target.files[0];
    if (file.size > 70 * 1024) {
      event.target.value = null;
      alert("La imagen no debe pesar más de 70KB")
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        this.producto.imagen = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
