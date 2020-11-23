import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todolist';
  name:string = 'Marwan Mai';

  constructor(){
    console.log('123');
    this.name = 'Joe'
    
  }
}

