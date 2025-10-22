import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { TodoCard } from '../todo-card/todo-card';
import { HttpClient } from '@angular/common/http';
import { TodoListResponse } from '../../models/todoListResponse';

@Component({
  selector: 'app-todo-list',
  imports: [TodoCard],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class TodoList implements OnInit{
  todoResponse = signal<TodoListResponse | undefined>(undefined)

  constructor(private httpClient:HttpClient){}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos(){
    this.httpClient
    .get<TodoListResponse>("https://dummyjson.com/todos")
    .subscribe({
      next:(response:TodoListResponse) => {
        this.todoResponse.set(response)
      },
      error:(err:any) => {
        console.log("Hata alındı:", err)
      },
      complete: () => {
        console.log("Hata ya da cevap başarılı geldi. İstek bitti.")
      }
    })
  }
}