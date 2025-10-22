import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { QuoteCard } from '../quote-card/quote-card';
import { QuoteListResponse } from '../../models/quoteListResponse';
import { HttpClient } from '@angular/common/http';
import { QuoteService } from '../../services/quote-service';

@Component({
  selector: 'app-quote-list',
  imports: [QuoteCard],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class QuoteList {
  quoteResponse = signal<QuoteListResponse | undefined>(undefined)

  constructor(private quoteService:QuoteService){}

  ngOnInit() {
    this.fetchQuotes();
  }

  fetchQuotes(){
    this.quoteService.getQuotes().subscribe({
      next:(response) => this.quoteResponse.set(response)
    })
  }
}
