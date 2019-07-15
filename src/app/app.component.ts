import { Component, Input } from '@angular/core';
import {SearchPlace} from './searchPlace.component';
import { SearchPlaceService } from './search-place.service';
import { Parking } from './parking.component';
import { Time } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'parkingnew';
  visitingLocation:string;
  date:Date;
  time:Time;
  showAvailableParking:Parking;
  partialLoc:string;
  searchPlace:SearchPlace;
  morecity=false;
  found:boolean=false;
  constructor(private search:SearchPlaceService){}
  onKeyPress(){
    this.found=true;
  }
    searchParking(){
      this.found=true;
       this.search.getParkingInformation(this.visitingLocation,this.date,this.time).subscribe((data)=>{
        console.log(data);
        if(data!=null){
          this.found=true;
          this.showAvailableParking=data;
        }
        else{
          this.found=false;
        }
      }) 
    }
    
}
