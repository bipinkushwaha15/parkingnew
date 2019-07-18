import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-parking',
  templateUrl: './visual-parking.component.html',
  styleUrls: ['./visual-parking.component.css']
})
export class VisualParkingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  count:number=0;
  event:number=0;
   //book=false;
   
   //isavailable = false;
   myClickFunction(event) {
     
     //this.isavailable = true;
     this.count+=1;
     alert("booking sucessful");
     if(this.count>=1){
       
       this.myClickFunction1(this.count);
       
     }
    //this.book=true;
     // this.isavailable = true;
      
      
   }
   
   //isavailable2=false;
   myClickFunction1(event) {
     
     //this.isavailable2 = true;
    // alert("Already booked");
     if(event>=1)
     {
       alert("place selected")
       
     } 
     else{
       alert("Already booked");
     }
    //this.book=true;
     // this.isavailable = true;
      
      
   }
}
