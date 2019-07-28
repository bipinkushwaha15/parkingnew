import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {Parking} from '../parking.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  parking: Parking[] = [
    new Parking(
      "Lko101",
      "Sahara State Parking",
      "Sahara State Parking, Hazratganj, Lucknow 226021",
      "Hazratganj", "Hazratganj", "Lucknow", "Uttar Pradesh", "India", 226021),
    new Parking(
      "Lko102",
      "Lucknow Municipal Underground Parking",
      "Lucknow Municipal Underground Parking, Indira Nagar, Lucknow 226022",
      "Indira Nagar", "Indira Nagar", "Lucknow", "Uttar Pradesh", "India", 226022),
    new Parking(
      "Bang104",
      "Baiyapanhalli Metro Parking West",
      "Baiyapanhalli Metro Parking,Baiyapanhalli Metro Station, Baiyapanhalli , Baiyapanhalli, Bangalore,560038",
      "Baiyapanhalli", "Baiyapanhalli", "Lucknow", "Karnataka", "India", 560038),
    new Parking(
      "Bang103",
      "Baiyapanhalli Metro Parking",
      "Baiyapanhalli Metro Parking,Baiyapanhalli Metro Station, Old Madras Road, Baiyapanhalli,Bangalore,560038",
      "Baiyapanhalli", "Old Madras Road", "Bangalore", "Karnataka", "India", 560038),
    new Parking(
      "Bang102",
      "Gopalan Signature Mall",
      "Gopalan Signature Mall, C.V. Raman Nagar,Old Madras Road,Benninganhalli,Bangalore,560093",
      "C.V. Raman Nagar", "Old Madras Road", "Bangalore", "Karnataka", "India", 560093),
    new Parking(
      "Bang101",
      "Gopalan Grand Mall",
      "Gopalan Grand Mall, C.V. Raman Nagar,Nagavarapalya Layout,Benninganhalli,Bangalore,560093",
      " C.V. Raman Nagar", "Nagavarapalya Layout", "Bangalore", "Karnataka", "India", 560093),
  ]
  values: string[] = [];
  final: string[] = [];
  address: string[] = [];
  searchInputEntered:boolean=false;
  searchInputSelected=false;
  @Input() searchInput:string;
  @Output() selectedAddress=new EventEmitter<string>();
 @Output() getAddress=new EventEmitter<string>();
  
  onKeyPress(event) {
    //this.final=this.park;
    let partLoc = event.target.value;
    for (let i = 0; i < this.parking.length; i++) {
      this.address[i] = this.parking[i].parking_address;
     // console.log(this.address[i]);
    }
    for (let i = 0; i < this.address.length; i++) {
      //console.log(this.address[i].indexOf(partLoc)+"  "+this.address[i].lastIndexOf(partLoc));
      //console.log(this.address[i].toLocaleLowerCase().trim().match(partLoc));
      if (this.address[i].trim().match(partLoc)){
        this.final[i] = this.address[i];
      }
    }
    //console.log(this.final.length);
    this.values = this.final;
  }

  getParking(getSearchInput:string) {
   // console.log(getSearchInput);
   this.searchInputSelected=true;
    this.getAddress.emit(getSearchInput);
  }
  onselect(address:string){
    this.selectedAddress.emit(address);
    //console.log(address);
    this.searchInput=address;
    this.searchInputEntered=true;
  }
}
