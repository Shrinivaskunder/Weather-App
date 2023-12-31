import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apikey='baafadf469f4805a3127eb7e4f5f4c06';

  constructor(private http: HttpClient) { }

getWeatherDataByCoords(lat:any, lon:any){
  
  let params = new HttpParams()
  .set("lat", lat)
  .set("lon", lon)
  .set("units", 'metric')
  .set("appid", this.apikey)
  return this.http.get(this.url, {params});
}

getWeatherDataByCityname(city:string){
 
  let params = new HttpParams()
  
  .set("q", city)
  .set("units", 'metric')
  .set("appid", this.apikey)
  
  return this.http.get(this.url, {params});
}
sendMessage = new Subject();
communicateMessage(msg:any){
  this.sendMessage.next(msg);
  alert(msg)
}

}

