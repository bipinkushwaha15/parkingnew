import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingplaceComponent } from './parkingplace/parkingplace.component';
import { ParkingOptionComponent } from './parking-option/parking-option.component';
import { FormsModule } from '@angular/forms';
//import {SearchPlace} from './searchPlace.component';
//import {Location} from './location.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualParkingComponent } from './visual-parking/visual-parking.component';
import { VisualParking2Component } from './visual-parking2/visual-parking2.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CityServiceComponent } from './city-service/city-service.component';
import { HomeComponent } from './home/home.component';
import { Header1Component } from './header1/header1.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingplaceComponent,
    ParkingOptionComponent,
    VisualParkingComponent,
    VisualParking2Component,
    LoginPageComponent,
    RegistrationPageComponent,
    HeaderComponent,
    FooterComponent,
    CityServiceComponent,
    HomeComponent,
    Header1Component,
    //Location,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'cities',
        component: CityServiceComponent
      },
      {
        path: 'parkingOption/:city',
        component: ParkingOptionComponent
      }, 
      {
        path: 'Login',
        component:LoginPageComponent
      }, 
      {
        path: 'register',
        component: RegistrationPageComponent
      }, 
      {
        path: 'bookPark',
        component: ParkingplaceComponent
      }, 
      {
        path: 'schedule',
        component: ParkingOptionComponent
      }, 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
