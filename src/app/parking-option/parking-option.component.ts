import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-parking-option',
  templateUrl: './parking-option.component.html',
  styleUrls: ['./parking-option.component.css']
})
export class ParkingOptionComponent implements OnInit {
  bookPark:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onAvailableParking(){

    this.bookPark=true;
  }
  bookpark(fromDate:Date,toDate:Date,fromTime:Time,toTime:Time){
    console.log(fromDate,toDate,fromTime,toTime);
    this.bookPark=true;
  }
}
