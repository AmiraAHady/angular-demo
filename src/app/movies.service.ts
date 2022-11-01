import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  void getMovies(){
    console.log('get all movies');
    console.log('get all movies from node js backend');
    
  }
  void searchMovieById(){
    console.log('get all single movie');
    
  }

 
}
