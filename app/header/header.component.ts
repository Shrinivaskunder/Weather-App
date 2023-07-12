import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html' ,
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  lat:any;
  lon: any;
  weather1: any;
 iconid:any;
 iconurl:any;
  f:any;
  c:any;
 msg:any;
 heart1:any;
 tmin:any;
 tmax:any;
fav:any;
recent:any;
clicked:any;
constructor(private weatherService: WeatherService ){ }
  ngOnInit(): void {
    
    
  }
  
dateTime = new Date()
weather2:any;
navbarOpen = false;
cityWeather:any;
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}


 getCity(city:any){
this.weatherService.getWeatherDataByCityname(city).subscribe(data=>{
  this.weather2 = data
 
this.weatherService.communicateMessage(this.weather2)
alert("hey")
})
 } 

 input:any;
sendit(data:any){
  this.input=data;
}
}