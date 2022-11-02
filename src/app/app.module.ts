import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
<<<<<<< HEAD
import { DemoComponent } from './demo/demo.component';
import { MovieratingComponent } from './movierating/movierating.component';
import { Newfeature2Component } from './newfeature2/newfeature2.component';
=======
import { TvlistComponent } from './tvlist/tvlist.component';
>>>>>>> newfeature

@NgModule({
  declarations: [
    AppComponent,
    MovieslistComponent,
    MovieDetailsComponent,
<<<<<<< HEAD
    DemoComponent,
    MovieratingComponent,
    Newfeature2Component
=======
    TvlistComponent
>>>>>>> newfeature
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
