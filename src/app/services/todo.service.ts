import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //Set the url property 
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient ) { }

  //Get Todos
  getTodos():Observable<Todo[]>{
    return  this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`) ;
  }

  //Toggle Completed
  toggleCompleted(todo:Todo ):Observable<any>{
    const url= `${this.todosUrl}/${todo.id}`;
    return this.http.put(url,todo,httOptions );
   }


}
