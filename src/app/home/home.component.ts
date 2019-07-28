import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Parking } from '../parking.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
 loadedMenu:string;
  emptyString: boolean;
  @Output() citySelected = new EventEmitter<string>();
  @Output() searchInput=new EventEmitter<string>();
  searchResult:string;
  searchresult:boolean=false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onsearch(searchResult:string){
    this.searchInput.emit(searchResult);
    this.searchResult=searchResult;
   // console.log(searchResult);
    this.searchresult=true;
  }

  onNavigate(menu:string){
    this.loadedMenu=menu;
  }
 
  selectParking(event) {
    alert(event.string.value);
  }

}
