import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Parking } from '../parking.component';
import { ActivatedRoute } from '@angular/router';

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
    }
  ]
  parking: Parking[] = [
    new Parking(
      "Lko101",
      "Sahara State Parking",
      "Sahara State Parking, Hazratganj, Lucknow 226021",
      "Hazratganj","Hazratganj","Lucknow","Uttar Pradesh","India",226021),
    new Parking(
      "Lko102",
      "Lucknow Municipal Underground Parking",
      "Lucknow Municipal Underground Parking, Indira Nagar, Lucknow 226022",
      "Indira Nagar","Indira Nagar","Lucknow","Uttar Pradesh","India",
      226022),
    new Parking(
      "Bang104",
      "Baiyapanhalli Metro Parking West",
      "Baiyapanhalli Metro Parking,Baiyapanhalli Metro Station, Baiyapanhalli , Baiyapanhalli, Bangalore,560038",
      "Baiyapanhalli", "Baiyapanhalli", "Lucknow", "Karnataka", "India", 560038),
  ]
  values: string[] = [];
  final: string[] = [];
  address: string[] = [];
  emptyString: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onKeyPress(event) {
    //this.final=this.park;
    let partLoc = event.target.value;
    for (let i = 0; i < this.parking.length; i++) {
      this.address[i] = this.parking[i].parking_address;
      console.log(this.address[i]);
    }
    for (let i = 0; i < this.address.length; i++) {
      //console.log(this.address[i].indexOf(partLoc)+"  "+this.address[i].lastIndexOf(partLoc));
      console.log(this.address[i].toLocaleLowerCase().trim().match(partLoc));
      if (this.address[i].toLowerCase().trim().match(partLoc)){
        this.final[i] = this.address[i];
      }
    }
    console.log(this.final.length);
    this.values=this.final;
  }
  getParking() {
    console.log("hello");
  }
  selectParking(event) {
    alert(event.string.value);
  }
  getcity(city:HTMLLinkElement) {
    console.log(city.nodeValue);
  }
}
