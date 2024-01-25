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
  textoPlaceHolder = 'Escriba algo aquí'
  disabled = true;
  imgSrc = 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'

  constructor() {
    setInterval( ()=> this.nombre = 'Guido Maiola' ,5000);
    setInterval( () => this.disabled = false, 3000)
  }

  getSuma(n1: number, n2: number) {
    return n1 + n2
  }
  
}
