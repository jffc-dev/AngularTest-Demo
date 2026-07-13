import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
import { PRODUCTS } from './products-data';

interface CartItem {
  producto: Product;
  cantidad: number;
}

@Component({
  selector: 'cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class App {
  // productos: Product[] = PRODUCTS;
  // carrito: CartItem[] = [];
  productos = signal<Product[]>(PRODUCTS);
  carrito = signal<CartItem[]>([])
  busqueda = signal<string>('')

  addToCart(producto: Product) {
    // this.carrito.push({ producto, cantidad: 1 });
    this.carrito.update((items) => [...items, {producto, cantidad: 1}])
  }

  removeFromCart(productId: number) {
    // this.carrito = this.carrito.filter(item => item.producto.id !== productId);
    this.carrito.update((items) => items.filter((item) => item.producto.id !== productId))
  }

  // get filteredProducts(): Product[] {
  //   return this.productos.filter(p =>
  //     p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
  //   );
  // }

  filteredProducts = computed<Product[]>(() => {
    return this.productos().filter((producto) =>
      producto.nombre.toLowerCase().includes(this.busqueda().toLowerCase())
    )
  })

  // getTotal(): number {
  //   console.log('Calculando total...');
  //   return this.carrito.reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0);
  // }

  getTotal = computed(() => {
    return this.carrito().reduce((sum, item) => sum + item.producto.precio * item.cantidad, 0)
  })
}
