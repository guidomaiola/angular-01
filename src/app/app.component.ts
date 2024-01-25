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
  textPlaceHolder = 'Write something here'
  disabled = true;
  imgSrc = 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'
  text = 'This is a video about Event Binding'

  constructor() {
    setInterval( ()=> this.nombre = 'Guido Maiola' ,5000);
    setInterval( () => this.disabled = false, 3000)
  }

  getSuma(n1: number, n2: number) {
    return n1 + n2
  }

  updateText(): void {
    this.text = 'On the next video, we will see two-way data binding'
  }
  
}
