import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  void login(userName:string,email:string){
    console.log('connect to node js api');
    
  }
  
  void signup(userName:string,email:string){
    console.log('connect to node js api for signup');
    
  }
  
}
