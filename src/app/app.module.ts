import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvlistComponent } from './tvlist/tvlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieslistComponent,
    MovieDetailsComponent,
    TvlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
