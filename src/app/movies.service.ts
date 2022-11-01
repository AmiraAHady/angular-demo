import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  void getMovies(){
    console.log('get all movies');
    
  }
}
