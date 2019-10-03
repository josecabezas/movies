import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-popular',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild('h1', {static: false})
  h1: ElementRef; 

  public prueba: string = '1980-06-30';
  public popularMoviesResult: any = [];
  public isLoading: boolean = true;
  public page: number = 1;
  public urlImg: string = 'http://image.tmdb.org/t/p/w500/';
  public genres: any = [];
  public genre: number = 0;
  public filterForm: any;
  public resizeCols: number;
  public resizeRows: string = '2:2.4';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // * Initialice FormGroup
    this.filterForm = this.fb.group({
      genresSelect: new FormControl('')
    });
    
    this.getPopularMovies(this.page, this.genre);

    // * Get genres list
    this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=02a9191253641e832721de4b48497a55&language=es').subscribe(data => {
      this.genres = data;
      this.genres = this.genres.genres;
      // console.log(this.genres)
    });
  
    this.resizeMethod(window.innerWidth)
  }

  // * Get popoular movies 
  getPopularMovies(page, genre) {

    let popularMoviesUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=02a9191253641e832721de4b48497a55&page=${page}&origin=popular&language=es`
    if(genre != 0) {
      popularMoviesUrl = popularMoviesUrl + `&with_genres=${genre}`
    }
    this.http.get(popularMoviesUrl).subscribe(data => {
      this.popularMoviesResult = data;
      this.popularMoviesResult = this.popularMoviesResult.results;
      this.isLoading = false;
    });
  }

  navigate(e) {
    // * we add one because index starts at 0 and pages starts at 1
    const pageToNavigate = e.pageIndex + 1;
    this.getPopularMovies(pageToNavigate, this.genre);
    // * smooth scroll to top when changing page
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  genresOnChange() {
    this.genres.map(item => {
      const objKey: any = Object.values(item);
      const selectValue = this.filterForm.get('genresSelect').value;

      if( objKey[0] == selectValue) {
        this.genre = selectValue;
        this.getPopularMovies(1, selectValue);
        this.paginator.firstPage();
      }
      
    });
  }

  onWindowResize(event) {
    const windowWidth = event.target.innerWidth;
    this.resizeMethod(windowWidth)
  }

  resizeMethod(windowWidth) {
    if(windowWidth > 1200) {
      this.resizeCols = 4;
      this.resizeRows = '2:2.5';
    }
    else if(windowWidth > 938) {
      this.resizeCols = 3;
      this.resizeRows = '2:2.3';
    }
    else if(windowWidth > 600) {
      this.resizeCols = 2;
      this.resizeRows = '2:2.2';
    }
    else if(windowWidth > 400) {
      this.resizeCols = 1;
      this.resizeRows = '2:1.9';

    }
  }

}
