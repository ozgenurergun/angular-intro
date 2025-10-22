import { Component } from '@angular/core';
import { TodoList } from "../../components/todo-list/todo-list";

@Component({
  selector: 'app-todos',
  imports: [TodoList],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos {

}
