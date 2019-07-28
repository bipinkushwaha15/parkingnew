import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Time,DatePipe } from '@angular/common';
import { Parking } from '../parking.component';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-parking-option',
  templateUrl: './parking-option.component.html',
  styleUrls: ['./parking-option.component.css']
})
export class ParkingOptionComponent implements OnInit {
  bookPark: boolean = false;
  @Input() addressIs: string;
  @Input('parkingElement') element: Parking;
  currentDate=new Date();
  @Output() book = new EventEmitter<Booking>();
  booking: Booking;
  dateChange=false;

  constructor() {
     /* this.currentdate=this.datepipe.transform(this.currentDate,'dd-MM-yyyy');  */
   }

  ngOnInit() {
  }
  changeDateRequest(){
    this.dateChange=true;
  }
  getAddress(address: string) {
    console.log("Address is:" + address);
    this.addressIs = address;
  }
  onAvailableParking() {
    this.bookPark = true;
  }
  bookpark(date,FromTime,ToTime) {
    //console.log(this.addressIs);
    this.booking.address=this.addressIs;
    this.booking.booking_date=date;
    this.booking.bookingFrom_time=FromTime;
    this.booking.bookingTo_time=ToTime;
    //console.log(this.currentDate)
    this.bookPark = true;
    this.book.emit(this.booking);
  }
}
