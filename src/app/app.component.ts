import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Guido'

  constructor() {
    setInterval( ()=> this.nombre += ' Maiola' ,3000);
  }

  getSuma(n1: number, n2: number) {
    return n1 + n2
  }
  
}
