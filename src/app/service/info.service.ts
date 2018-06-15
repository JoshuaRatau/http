import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http:Http) {}
  
   
   getUser(){
   return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
  
    
  }
   

}