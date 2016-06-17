import { Component,Injectable} from '@angular/core';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  GOOGLE_MAPS_PROVIDERS,
  GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';


interface is_show_m {
   status:boolean;
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
}

@Injectable()
@Component({
  selector: 'my-map-modal',
  directives: [GOOGLE_MAPS_DIRECTIVES],
  styleUrls:["app/Map-Modal/app.map-modal.component.css"],
  templateUrl:"app/Map-Modal/app.map-modal.component.html",
  properties:["Modal_Content2","Is_Open2","Get_lat","Get_lng"],
  // providers: [MarkerManager ],
})
export class MapModalComponent {
  test:string;
  Modal_Content2:Array<Object>;
  Is_Open2:is_show_m;
  Get_lat:any;
  Get_lng:any;
  constructor() {
    this.Modal_Content2 = [];
    this.Is_Open2 = {status:false};
  }
  // google maps zoom level
  zoom: number = 18;

  markers: marker[] = [
  ]

}
