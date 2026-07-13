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
  searchTerm: string = '';

  addToCart(producto: Product) {
    this.carrito.push({ producto, cantidad: 1 });
  }

  removeFromCart(productId: number) {
    this.carrito = this.carrito.filter(item => item.producto.id !== productId);
  }

  get filteredProducts(): Product[] {
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getTotal(): number {
    console.log('Calculando total...');
    return this.carrito.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0);
  }
}
