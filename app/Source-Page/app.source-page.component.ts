import { Component,ElementRef,AfterViewInit} from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
@Component({
  selector: 'my-source',
  styleUrls:["app/Source-Page/app.source-page.component.css"],
  templateUrl:"app/Source-Page/app.source-page.component.html",
  directives: [ROUTER_DIRECTIVES]
})
export class SourcePageComponent implements AfterViewInit{
  static chosenInitialized = false;
  constructor(private el:ElementRef) {
    $("html, body").animate({scrollTop: 0}, 0);
  }
  ngAfterViewInit() {
      if(!SourcePageComponent.chosenInitialized) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup2').fadeIn();
            } else {
                $('.scrollup2').fadeOut();
            }
        });
         SourcePageComponent.chosenInitialized = true;
      }
  }
  Gotop(){
    $("html, body").animate({scrollTop: 0}, 600);
  }
}
