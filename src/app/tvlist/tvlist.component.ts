import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvlist',
  templateUrl: './tvlist.component.html',
  styleUrls: ['./tvlist.component.css']
})
export class TvlistComponent implements OnInit {

  constructor(private movsService:MoviesService) { }

  ngOnInit(): void {
    this.movsService.getTVShows().subscribe({next:()=>{}})
  }



}
