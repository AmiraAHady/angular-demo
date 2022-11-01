import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  isDiabled:boolean =true 
  childmsg:string='';
  pageSize:number=20
  length!:number;
  currentPage:number=1
 private _searchValue:string='' 
 moviesData:any[]=[]
 filteredMovies:any[]=this.moviesData; 
  constructor(private movsService :MoviesService,private authserv:AuthService) { }

  ngOnInit(): void {
    console.log('retrive movies from api');
    
  }
  get searchValue():string{
    return this._searchValue;
   }
 
   set searchValue(value:string){ 
     this._searchValue=value;
     console.log(value);
     
     this.performSearch(value)
 
   }


   performSearch(val:string){
    this.movsService.getSearchMovies(val).subscribe({next:(data)=>{
      this.filteredMovies=data.results;
    }})

  }


}
