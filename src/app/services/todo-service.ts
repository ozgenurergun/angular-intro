import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListResponse } from '../models/todoListResponse';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private httpClient:HttpClient) {}

  getTodos() : Observable<TodoListResponse> {
    return this.httpClient.get<TodoListResponse>("https://dummyjson.com/todos");
  }
}
