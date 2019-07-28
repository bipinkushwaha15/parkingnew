import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-parkingplace',
  templateUrl: './parkingplace.component.html',
  styleUrls: ['./parkingplace.component.css']
})
export class ParkingplaceComponent implements OnInit {

  @Input() bookingOut:Booking;

  constructor() { }

  ngOnInit() {
  }

}
