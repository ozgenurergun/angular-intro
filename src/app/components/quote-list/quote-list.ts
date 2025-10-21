import { Component } from '@angular/core';
import { QuoteCard } from '../quote-card/quote-card';
import { QuoteListResponse } from '../../models/quoteListResponse';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-list',
  imports: [QuoteCard],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.scss'
})
export class QuoteList {
  quoteResponse!:QuoteListResponse

  constructor(private httpClient:HttpClient){}

  ngOnInit() {
    this.fetchQuotes();
  }

  fetchQuotes(){
    this.httpClient
    .get<QuoteListResponse>("https://dummyjson.com/quotes")
    .subscribe({
      next:(response:QuoteListResponse) => {
        this.quoteResponse = response
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
