import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { TodoService, TodoServices } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoService:TodoService) { }

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
    //Toggle strike through in UI | Toggle in UI
    todo.completed = !todo.completed;
    
    //Toggle on Server | Updating completed option in server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
 
  //onDelete associated to the click event on delete button 
  onDelete(todo:Todo){
    this.deleteTodo.emit(todo);
    
  }
}
