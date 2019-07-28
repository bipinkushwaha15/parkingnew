import { Time } from '@angular/common';
import { Parking } from './parking.component';

export class Booking{
    address:string;
    booking_date:Date;
    bookingFrom_time:Time;
    bookingTo_time:Time;
}