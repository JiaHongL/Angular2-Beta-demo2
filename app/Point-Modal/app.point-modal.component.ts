
import { Component,ViewEncapsulation,Input} from '@angular/core';
import {NgClass} from '@angular/common';
interface is_show_m {
   status:boolean;
}
@Component({
  selector: 'my-point-modal',
  styleUrls:["app/Point-Modal/app.point-modal.component.css"],
  templateUrl:"app/Point-Modal/app.point-modal.component.html",
  directives: [NgClass],
  properties:["Modal_Content2","Is_Open2"],
})
export class PointModalComponent {
  Modal_Content2:Array<Object>;
  Is_Open2:is_show_m;
  constructor() {
    this.Modal_Content2 = [];
    this.Is_Open2 = {status:false};
  }
}
