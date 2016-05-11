
import { Component,ViewEncapsulation,Input} from '@angular/core';
import {NgClass} from '@angular/common';
interface is_show_m {
   status:boolean;
}
@Component({
  selector: 'my-big-modal',
  styleUrls:["app/Big-Modal/app.big-modal.component.css"],
  templateUrl:"app/Big-Modal/app.big-modal.component.html",
  directives: [NgClass],
  properties:["Modal_Content","Is_Open"],
})
export class BigModalComponent {
  Modal_Content:Array<Object>;
  Is_Open:is_show_m;
  constructor() {
    this.Modal_Content = [];
    this.Is_Open = {status:false};
  }
}
