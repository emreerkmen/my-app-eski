import { Component, OnInit } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  constructor() { }
  
  cities:City[];

  
  ngOnInit() {
  }

}
