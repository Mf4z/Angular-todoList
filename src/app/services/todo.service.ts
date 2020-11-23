import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //Set the url property 
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient ) { }

  //getTodos() method 
  getTodos():Observable<Todo[]>{
    return  this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`) ;
  }
}
