import { Component } from '@angular/core';
import { QuoteList } from "../../components/quote-list/quote-list";

@Component({
  selector: 'app-quotes',
  imports: [QuoteList],
  templateUrl: './quotes.html',
  styleUrl: './quotes.scss'
})
export class Quotes {

}
