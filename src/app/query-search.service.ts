import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QuerySearchService {
  public querySearch:string = 'init';
  constructor() { }
}
