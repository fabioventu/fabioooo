import { Component } from '@angular/core';
import { Point } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-maps';
  lat: number = 45.506738;
  lng: number = 9.190766;
  icon =  {
    url:'./assets/img/99 - cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };
  icon1 =  {
    url:'./assets/img/Fish_Food_icon-icons.com_68747.ico',
    scaledSize: {
      width: 150,
      height: 200
    }
  };
  icon2 =  {
    url:'./assets/img/fruit_apple_food_1816.ico',
    scaledSize: {
      width:100,
      height: 80
    }
  };
    triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4},
  ]





}
