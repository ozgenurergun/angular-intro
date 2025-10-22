import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { TodoCard } from '../todo-card/todo-card';
import { HttpClient } from '@angular/common/http';
import { TodoListResponse } from '../../models/todoListResponse';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-list',
  imports: [TodoCard],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class TodoList implements OnInit{
  todoResponse = signal<TodoListResponse | undefined>(undefined)

  constructor(private todoService:TodoService){}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos(){
    this.todoService.getTodos().subscribe({
      next:(response) => this.todoResponse.set(response)
    })
  }
}