import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginSuccess:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  afterLogin(){
    this.loginSuccess=true;
  }
  doLogin(email,password){
    console.log(email+" "+password)
  }
}
