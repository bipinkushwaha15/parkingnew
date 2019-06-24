import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
//import {SearchPlace} from './searchPlace.component';
import {Parking} from './parking.component';
import {Location} from './location.component';
import { Time } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SearchPlaceService {
  readonly url='http:localhost:8000/';
  name:string;
  distance:number;

  constructor(private http:HttpClient) { }
  //constructor(private park:Location){ }

  getParkingInformation(location:string,date:Date,time:Time):Observable<Parking>{
    const urllink='gp?location='+location+'&date='+date;
   // return  this.http.get(this.url+urllink);
   return null;
  }
}
