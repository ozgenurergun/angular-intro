import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteListResponse } from '../models/quoteListResponse';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  constructor(private httpClient:HttpClient) {}

  getQuotes() : Observable<QuoteListResponse> {
    return this.httpClient.get<QuoteListResponse>("https://dummyjson.com/quotes")
  }
}
