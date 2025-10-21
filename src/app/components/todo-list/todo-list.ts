import { Component, OnInit } from '@angular/core';
import { TodoCard } from '../todo-card/todo-card';
import { HttpClient } from '@angular/common/http';
import { TodoListResponse } from '../../models/todoListResponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [TodoCard, CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList implements OnInit{
  todoResponse!:TodoListResponse

  constructor(private httpClient:HttpClient){}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos(){
    this.httpClient
    .get<TodoListResponse>("https://dummyjson.com/todos")
    .subscribe({
      next:(response:TodoListResponse) => {
        this.todoResponse = response
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