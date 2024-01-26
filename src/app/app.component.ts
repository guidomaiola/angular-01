import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  studentsList: any[] = [
    {name: 'Guido Maiola', status: 'Registered'},
    {name: 'John Doe', status: 'Regular'},
    {name: 'Joe Smith', status: 'Regular'},
    {name: 'Adam White', status: 'Registered'},
    {name: 'Nick Johnson', status: 'Suspended'}
  ]


}

