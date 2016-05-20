
import {Component} from '@angular/core';
import {BigModalComponent} from '../Big-Modal/app.big-modal.component';
import {PointModalComponent} from '../Point-Modal/app.point-modal.component';
import {MapModalComponent} from '../Map-Modal/app.map-modal.component';

interface is_show_m {
   status:boolean;
}
@Component({
  selector: 'my-list',
  styleUrls:["app/List/app.list.component.css"],
  templateUrl:"app/List/app.list.component.html",
  directives: [BigModalComponent,PointModalComponent,MapModalComponent],
  properties:["pass_data"],
})
export class ListComponent {
  pass_data:Array<Object>;
  Open_modal:is_show_m;
  Modal_Data:Array<Object>;
  Open_modal2:is_show_m;
  Modal_Data2:any;
  Pass_lat:any;
  Pass_lng:any;
  constructor() {
    this.pass_data = [];
    this.Open_modal = {status:false};
    this.Modal_Data = [];
    this.Open_modal2 = {status:false};
    this.Modal_Data2 = [];
    this.Pass_lat = 24.6679321;
    this.Pass_lng = 121.65228479999996;
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
    console.log(this.Modal_Data2);
    console.log(this.Modal_Data2.Coordinate);
    var l = this.Modal_Data2.Coordinate.length
    console.log(this.Modal_Data2.Coordinate.length);
    var index = this.Modal_Data2.Coordinate.indexOf(',')
    console.log(this.Modal_Data2.Coordinate.indexOf(','));
    var v1 = this.Modal_Data2.Coordinate.substr(0,index);
    console.log(v1);
    var v2 = this.Modal_Data2.Coordinate.substr(index+1,l);
    console.log(v2);
    this.Pass_lat = parseFloat(v1);
    this.Pass_lng = parseFloat(v2);
  }
}
