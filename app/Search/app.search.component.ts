
import { Component,ViewEncapsulation,ViewChild,Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'my-search',
  styleUrls:["app/Search/app.search.component.css"],
  templateUrl:"app/Search/app.search.component.html",
  directives: [NgClass]
})
export class SearchComponent {
  Is_Add_shadow:boolean = false;
  Search_Parameter:string;
  @Output() Onclick_Search= new EventEmitter();
  constructor() {
    this.Search_Parameter = '';
  }
  Search(){
    this.Onclick_Search.emit(this.Search_Parameter);
  }
}

// if($('.dropdown-control').hasClass("active")||$('.dropdown-control').hasClass("open")){
// }
