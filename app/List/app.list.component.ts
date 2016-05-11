
import {Component} from '@angular/core';
import {BigModalComponent} from '../Big-Modal/app.big-modal.component';
import {PointModalComponent} from '../Point-Modal/app.point-modal.component';

interface is_show_m {
   status:boolean;
}
@Component({
  selector: 'my-list',
  styleUrls:["app/List/app.list.component.css"],
  templateUrl:"app/List/app.list.component.html",
  directives: [BigModalComponent,PointModalComponent],
  properties:["pass_data"],
})
export class ListComponent {
  pass_data:Array<Object>;
  Open_modal:is_show_m;
  Modal_Data:Array<Object>;
  Open_modal2:is_show_m;
  Modal_Data2:Array<Object>;
  constructor() {
    this.pass_data = [];
    this.Open_modal = {status:false};
    this.Modal_Data = [];
    this.Open_modal2 = {status:false};
    this.Modal_Data2 = [];
  }
  Open(d){
    if(this.Open_modal2.status==true){
      this.Open_modal.status = false;
    }else{
      this.Open_modal.status = true;
      this.Modal_Data = d;
    }
  }
  Open2(d){
    this.Open_modal2.status = true;
    this.Modal_Data2 = d;
  }
}
