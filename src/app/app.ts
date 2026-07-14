import { Component, signal } from '@angular/core';
import { ContadorAntes } from './components/contador-antes/contador-antes';
import { ContadorConSignals } from './components/contador-con-signals/contador-con-signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContadorAntes, ContadorConSignals],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}
