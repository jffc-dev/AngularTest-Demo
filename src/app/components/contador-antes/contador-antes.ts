import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-antes',
  imports: [],
  templateUrl: './contador-antes.html',
  styleUrl: './contador-antes.css',
})
export class ContadorAntes {
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
