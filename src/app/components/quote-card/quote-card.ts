import { Component, Input } from '@angular/core';
import { Quote } from '../../models/quoteListResponse';

@Component({
  selector: 'app-quote-card',
  imports: [],
  templateUrl: './quote-card.html',
  styleUrl: './quote-card.scss'
})
export class QuoteCard {
  @Input() quote!:Quote;
}
