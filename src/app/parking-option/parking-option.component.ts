import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-option',
  templateUrl: './parking-option.component.html',
  styleUrls: ['./parking-option.component.css']
})
export class ParkingOptionComponent implements OnInit {
  bookPark:boolean;
  constructor() { }

  ngOnInit() {
  }
  onAvailableParking(){

    this.bookPark=true;
  }
}
