import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() finalVar:string[];
  @Output() selectAddress=new EventEmitter<void>(); 
  constructor() { }

  ngOnInit() {
  }
  selectedAddress(){
    this.selectAddress.emit();
  }
}
