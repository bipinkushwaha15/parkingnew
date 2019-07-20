import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Parking } from '../parking.component';
import { ActivatedRoute } from '@angular/router';

export type FuzzyScore = number;

export interface FuzzySegment {
  value: string;
  isMatch: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  public park: Array<Parking> = [
    {
      parking_id: "Bang101",
      parking_name: "Gopalan Grand Parking",
      parking_address: "Gopalan Grand Mall, C.V. Raman Nagar,Nagavarapalya Layout,Benninganhalli,Bangalore,560093",
      parking_area: "C.V. Raman Nagar",
      parking_locality: "Nagavarapalya Layout",
      parking_city: "Bangalore",
      parking_state: "Karnataka",
      parking_country: "India",
      parking_pin: 560093
    },
    {
      parking_id: "Bang102",
      parking_name: "Gopalan Signature Parking",
      parking_address: "Gopalan Signature Mall, C.V. Raman Nagar,Old Madras Road,Benninganhalli,Bangalore,560093",
      parking_area: "C.V. Raman Nagar",
      parking_locality: "Old Madras Road",
      parking_city: "Bangalore",
      parking_state: "Karnataka",
      parking_country: "India",
      parking_pin: 560093
    },
    {
      parking_id: "Bang103",
      parking_name: "Baiyapanhalli Metro Parking",
      parking_address: "Baiyapanhalli Metro Parking,Baiyapanhalli Metro Station, Old Madras Road, Baiyapanhalli,Bangalore,560038",
      parking_area: "Baiyapanhalli",
      parking_locality: "Old Madras Road",
      parking_city: "Bangalore",
      parking_state: "Karnataka",
      parking_country: "India",
      parking_pin: 560038
    },
    {
      parking_id: "Bang104",
      parking_name: "Baiyapanhalli Metro Parking West",
      parking_address: "Baiyapanhalli Metro Parking,Baiyapanhalli Metro Station, Baiyapanhalli , Baiyapanhalli, Bangalore,560038",
      parking_area: "Baiyapanhalli",
      parking_locality: "Baiyapanhalli",
      parking_city: "Bangalore",
      parking_state: "Karnataka",
      parking_country: "India",
      parking_pin: 560038
    },
  ]
  values: string[] = [];
  final: string[] = [];
  address: string[] = [];
  emptyString:boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onKeyPress(event) {
    //this.final=this.park;
    let partLoc =event.target.value;
    for (let i = 0; i < this.park.length; i++) {
      this.address[i] = this.park[i].parking_address;
      //console.log(this.address[i]);
    }
    for (let i = 0; i < this.address.length; i++) {
      //console.log(this.address[i].indexOf(partLoc)+"  "+this.address[i].lastIndexOf(partLoc));
      console.log(this.address[i].match(partLoc));
      if (this.address[i].match(partLoc)){
        this.final[i] = this.address[i];
      }
    }
  }
  getParking() {
    console.log("hello");
  }
  selectParking(event) {
    alert(event.string.value);
  }
  getcity() {
    console.log();
  }
}
