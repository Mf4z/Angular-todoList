import { Component, OnInit,Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  } 

  //Set Dynamic Classes
  setClasses(){
    let classes = {
      todo:true,
      'is-complete' : this.todo.completed,
    }

    return classes;
  }

  //onToggle associated with change button on the checkbox button 
  onToggle(todo:Todo){
    todo.completed = !todo.completed;
    
  }
 
  //onDelete associated to the click event on delete button 
  onDelete(todo:Todo){
    console.log('delete');
    
  }
}
