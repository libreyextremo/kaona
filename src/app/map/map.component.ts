import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 39.9601233;
  lng: number = -4.828641;
  

  constructor() { }

  ngOnInit() {
  }

}
