import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { TodoList } from "./components/todo-list/todo-list";
import { QuoteList } from "./components/quote-list/quote-list";
import { Loader } from './components/loader/loader';

@Component({
  selector: 'app-root', //bu component başka componentlarda <app-root>... şeklinde kullanılır
  //imports: [RouterOutlet], 
  templateUrl: './app.html', //html şablon dosya yolu
  styleUrl: './app.scss', //stil dosyasının yolu
  imports: [FormsModule, ProductList, TodoList, QuoteList, RouterOutlet, Loader], //bu componentin kullandığı diğer componentler, direktifler veya pipe'lar
})
export class App {

}
