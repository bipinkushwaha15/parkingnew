import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Loginfound:boolean=false;
  RegisterFound:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onLoginClick(){
    this.Loginfound=true;
  }
  onRegisterClick(){
    this.RegisterFound=true;
  }
}
