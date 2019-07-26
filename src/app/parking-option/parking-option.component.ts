import { Component, OnInit, Input } from '@angular/core';
import { Time } from '@angular/common';
import { Parking } from '../parking.component'

@Component({
  selector: 'app-parking-option',
  templateUrl: './parking-option.component.html',
  styleUrls: ['./parking-option.component.css']
})
export class ParkingOptionComponent implements OnInit {
  bookPark: boolean = false;
  addressIs:string;
  @Input('parkingElement')element: Parking;
  constructor() { }

  ngOnInit() {
  }
  onAvailableParking() {
    this.bookPark = true;
  }
  bookpark(fromDate: HTMLInputElement, toDate: HTMLInputElement, fromTime: HTMLInputElement, toTime: HTMLInputElement) {
    console.log(fromDate.value, toDate.value, fromTime.value, toTime.value);
    this.bookPark = true;
  }
}
