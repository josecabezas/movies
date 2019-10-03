import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  public id: number;
  public resultValues: any = {}
  public urlImg: string = 'http://image.tmdb.org/t/p/original/'
  public haveImage:boolean = true;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;

    let apiUrl = `https://api.themoviedb.org/3/person/${this.id}?api_key=02a9191253641e832721de4b48497a55&language=es`;
    
    this.http.get(apiUrl).subscribe(data => {
      this.resultValues = data;
      console.log(this.resultValues);
      if(this.resultValues.backdrop_path == null) {
        this.haveImage = false;
      }
      else {
        this.resultValues.backdrop_path = this.urlImg + this.resultValues.backdrop_path;
      }
    });
  }

  getBack() {
    this.router.navigate(['/popular-actors']);
  }

}
