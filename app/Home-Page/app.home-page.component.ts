import { Component, OnInit ,Input, Output, EventEmitter,ElementRef,AfterViewInit} from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HTTP_PROVIDERS, Http,Headers,Response} from '@angular/http';
import 'rxjs/Rx';
import {Service} from '../Service/Service';
import {SearchComponent} from '../Search/app.search.component';
import {ListComponent} from '../List/app.list.component';

@Component({
  selector: 'home-page',
  styleUrls:["app/Home-Page/app.home-page.component.css"],
  templateUrl:"app/Home-Page/app.home-page.component.html",
  directives: [ROUTER_DIRECTIVES,SearchComponent,ListComponent],
  providers:[HTTP_PROVIDERS,Service],
})
export class HomePageComponent implements AfterViewInit{
  static chosenInitialized = false;
  list_data:Array<any>;
  constructor(private router: Router,private http: Http,private _Service:Service,private el:ElementRef) {
    $("html, body").animate({scrollTop: 0}, 0);
    this._Service.Get_Restaurant_Data()
    .subscribe(
      data => {
        this.list_data = data[0];
      }
    );
  }
  Search(key){
    if(key==''){
      this._Service.Get_Restaurant_Data()
      .subscribe(
        data => {
          this.list_data = data[0];
        }
      );
    }else{
      this._Service.Search_Restaurant_Data(key)
      .subscribe(
        data => {
          this.list_data = data[0];
        }
      );
    }
  }
  ngAfterViewInit() {
      if(!HomePageComponent.chosenInitialized) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
         HomePageComponent.chosenInitialized = true;
      }
  }
  Gotop(){
    $("html, body").animate({scrollTop: 0}, 600);
  }
}
