import { Component } from '@angular/core';
import { ContadorAntes } from './components/contador-antes/contador-antes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContadorAntes],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}
