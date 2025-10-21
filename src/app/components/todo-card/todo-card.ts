import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todoListResponse';

@Component({
  selector: 'app-todo-card',
  imports: [],
  templateUrl: './todo-card.html',
  styleUrl: './todo-card.scss'
})
export class TodoCard {
  @Input() todo!:Todo;
}
