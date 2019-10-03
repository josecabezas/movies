import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-popular-actors',
  templateUrl: './popular-actors.component.html',
  styleUrls: ['./popular-actors.component.css']
})
export class PopularActorsComponent implements OnInit {

  @ViewChild('h1', {static: false})
  h1: ElementRef; 

  public popularActorsResult: any = [];
  public page: number = 1;
  public isLoading: boolean = true;
  public resizeCols: number;
  public resizeRows: string = '2:2.9';
  public urlImg: string = 'http://image.tmdb.org/t/p/w500/';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getPopularActors(this.page);
    this.resizeMethod(window.innerWidth)
  }

  getPopularActors(page) {
    let popularMoviesUrl = `https://api.themoviedb.org/3/person/popular?sort_by=popularity.desc&api_key=02a9191253641e832721de4b48497a55&page=${page}&origin=popular&language=es`
    this.http.get(popularMoviesUrl).subscribe(data => {
      this.isLoading = false;
      this.popularActorsResult = data;
      this.popularActorsResult = this.popularActorsResult.results;
      console.log(this.popularActorsResult);
    });
    
  }

  onWindowResize(event) {
    const windowWidth = event.target.innerWidth;
    this.resizeMethod(windowWidth)
  }

  navigate(e) {
    // * we add one because index starts at 0 and pages starts at 1
    const pageToNavigate = e.pageIndex + 1;
    this.getPopularActors(pageToNavigate);
    // * smooth scroll to top when changing page
    this.h1.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  resizeMethod(windowWidth) {
    if(windowWidth > 1200) {
      this.resizeCols = 4;
      this.resizeRows = '2:2.9';
    }
    else if(windowWidth > 720) {
      this.resizeCols = 3;
      this.resizeRows = '2:2.8';
    }
    else if(windowWidth > 600) {
      this.resizeCols = 2;
      this.resizeRows = '2:2.6';
    }
    else if(windowWidth > 400) {
      this.resizeCols = 1;
      this.resizeRows = '2:2';

    }
  }

}
