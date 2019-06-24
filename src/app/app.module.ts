import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingplaceComponent } from './parkingplace/parkingplace.component';
import { ParkingOptionComponent } from './parking-option/parking-option.component';
import {FormsModule} from '@angular/forms';
//import {SearchPlace} from './searchPlace.component';
//import {Location} from './location.component';
import {HttpClientModule} from '@angular/common/http';
import { VisualParkingComponent } from './visual-parking/visual-parking.component';
import { VisualParking2Component } from './visual-parking2/visual-parking2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingplaceComponent,
    ParkingOptionComponent,
    VisualParkingComponent,
    VisualParking2Component,
   // Location,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: ParkingplaceComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
