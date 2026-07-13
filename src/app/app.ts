import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // codigo del contador

  contador = 0

  incrementar(){
    this.contador++;
  }

  reducir(){
    this.contador--;
  }

  reiniciar(){
    this.contador = 0;
  }

  calcularDoble(){
    console.log('Calculando el doble...')
    return this.contador * 2;
  }


  // codigo del selector de colores

  color = 'white'

  cambiarColor(nuevoColor: string){
    this.color = nuevoColor;
  }
}
