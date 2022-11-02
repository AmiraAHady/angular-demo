import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newfeature2',
  templateUrl: './newfeature2.component.html',
  styleUrls: ['./newfeature2.component.css']
})
export class Newfeature2Component implements OnInit {

  constructor() { }

  log() {
    console.log('sarah branch');
    console.log('adding features');
  }
  ngOnInit(): void {
  }



}
