import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public id: number;
  public origin: string;
  public resultValues: any = {}
  public urlImg: string = 'http://image.tmdb.org/t/p/original/'
  public haveImage:boolean = true;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router:Router
    ) {}

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    this.origin = this.activatedRoute.snapshot.queryParamMap.get('origin')

    let apiUrl = `https://api.themoviedb.org/3/movie/${this.id}?api_key=02a9191253641e832721de4b48497a55&language=es`;
    
    this.http.get(apiUrl).subscribe(data => {
      this.resultValues = data;
      
      if(this.resultValues.backdrop_path == null) {
        this.haveImage = false;
      }
      else {
        this.resultValues.backdrop_path = this.urlImg + this.resultValues.backdrop_path;
      }
    });
  }

  getBack() {
    if(this.origin === 'search') {
      this.router.navigate(['/search']);
    }
    else if (this.origin === 'popular-movies') {
      this.router.navigate(['/popular-movies']);
    }
  }
}
