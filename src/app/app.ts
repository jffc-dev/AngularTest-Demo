import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';
import { PRODUCTS } from './products-data';
import { FormsModule } from '@angular/forms';

interface CartItem {
  producto: Product;
  cantidad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  productos: Product[] = PRODUCTS;
  carrito: CartItem[] = [];
  searchTerm: string = ''; // buscador señuelo, no filtra el carrito

  addToCart(producto: Product) {
    // const existente = this.carrito.find(item => item.producto.id === producto.id);
    // if (existente) {
    //   existente.cantidad++;
    // } else {
    //   this.carrito.push({ producto, cantidad: 1 });
    // }
    this.carrito.push({ producto, cantidad: 1 });
  }

  removeFromCart(productId: number) {
    this.carrito = this.carrito.filter(item => item.producto.id !== productId);
  }

  // Filtra productos en pantalla según lo que el usuario escribe.
  // Este método también se re-ejecuta en cada detección de cambios,
  // pero aquí SÍ tiene sentido porque depende de "searchTerm" cambiando
  // constantemente mientras se escribe.
  get filteredProducts(): Product[] {
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Función normal: se re-ejecuta en CADA detección de cambios,
  // incluso cuando solo se escribe en el buscador y el carrito
  // no cambió en absoluto. Este es el punto clave a demostrar
  // antes de refactorizar a computed().
  getTotal(): number {
    console.log('Calculando total...');
    return this.carrito.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0);
  }

  getItemCount(): number {
    return this.carrito.reduce((sum, item) => sum + item.cantidad, 0);
  }
}
