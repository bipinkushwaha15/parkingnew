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
  @Input('parkingElement')element: {
    parking_id: string, parking_name: string, parking_address: string, parking_area: string,
    parking_locality: string, parkinng_city: string, parking_state: string,
    parking_country: string, parking_pin: string
  }
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
