import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { QuerySearchService } from './query-search.service';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { TruncatePipe } from '../assets/pipes/truncate.pipe';
import { DateTransformPipe } from '../assets/pipes/date-transform.pipe';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { KeyvaluePipe } from '../assets/pipes/keyvalue.pipe';
// import { ValuePipe } from '../assets/pipes/value.pipe';
import { PopularActorsComponent } from './popular-actors/popular-actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieDetailComponent,
    PopularMoviesComponent,
    TruncatePipe,
    DateTransformPipe,
    // KeyvaluePipe,
    // ValuePipe,
    PopularActorsComponent,
    ActorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [QuerySearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
