import { Component, Output,AfterViewInit} from '@angular/core';
import {Service} from '../Service/Service';
import {SearchComponent} from '../Search/app.search.component';
import {ListComponent} from '../List/app.list.component';

@Component({
  selector: 'home-page',
  styleUrls:["app/Home-Page/app.home-page.component.css"],
  templateUrl:"app/Home-Page/app.home-page.component.html",
  directives: [SearchComponent,ListComponent],
  providers:[Service],
})
export class HomePageComponent implements AfterViewInit{
  static chosenInitialized = false;
  list_data:Array<any>;
  constructor(private _Service:Service) {
    $("html, body").animate({scrollTop: 0}, 0);
    this._Service.Get_Restaurant_Data()
    .subscribe(
      data => {
        this.list_data = data[0];
      }
    );
  }
  Search(queryString){
    if(queryString==''){
      this._Service.Get_Restaurant_Data()
      .subscribe(
        data => {
          this.list_data = data[0];
        }
      );
    }else{
      this._Service.Get_Restaurant_Data()
      .subscribe(
        data => {
          var return_data = [];
          for(var key in data[0]){
              var t =JSON.stringify(data[0][key].Address);
              var result = (t.match(queryString));
              if(result!=null){
                  return_data.push(data[0][key]);
              }
          }
          this.list_data = return_data;
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
