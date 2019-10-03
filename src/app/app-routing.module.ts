import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PopularActorsComponent } from './popular-actors/popular-actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/popular-movies', pathMatch: 'full' }, 
  { path: 'popular-actors', component: PopularActorsComponent },
  { path: 'popular-movies', component: PopularMoviesComponent },
  { path: 'search', component: MovieSearchComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'actor-detail/:id', component: ActorDetailComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
