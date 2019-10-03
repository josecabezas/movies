import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';
import { QuerySearchService } from '../query-search.service';

export interface DialogData {
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})

export class MovieSearchComponent implements OnInit {

  public myForm: any;
  public searchResult: any = [];
  public count: number = 0;
  public isLoading: boolean;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private querySearchService: QuerySearchService
  ) { }

  ngOnInit() {
    
    // * Initialice FormGroup
    this.myForm = this.fb.group({
      search: new FormControl('')
    });

    if(this.querySearchService.querySearch !== 'init') {
      this.getSearch(this.querySearchService.querySearch);
    }
    
  }
  
  // * Calls getSearch() when the user type 3 keys or more
  keyUp(e) {
    this.count ++;
    if(this.count > 2) {
      this.getSearch();
    }
  }

  // * Calls to search api
  getSearch(query = 'none') {
    const search = this.myForm.get('search').value;
    let APIUrl = '';
    if(search != '' && query == 'none') {
      this.isLoading = true;
      APIUrl = 'https://api.themoviedb.org/3/search/movie?api_key=02a9191253641e832721de4b48497a55&query='
      APIUrl = APIUrl + search;
      this.querySearchService.querySearch = APIUrl;
    }
    else {
      APIUrl = this.querySearchService.querySearch;
      const url = new URL(APIUrl);
      const query = url.searchParams.get("query");
      this.myForm.get('search').value = query;
    }
    this.http.get(APIUrl).subscribe(data => {
      this.isLoading = false;
      this.searchResult = data;
      this.searchResult = this.searchResult.results;
      // console.log(data)
    });
  }

}
