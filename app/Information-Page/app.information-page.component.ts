import { Component,AfterViewInit} from '@angular/core';
@Component({
  selector: 'my-information',
  styleUrls:["app/Information-Page/app.information-page.component.css"],
  templateUrl:"app/Information-Page/app.information-page.component.html",
})
export class InformationPageComponent implements AfterViewInit{
  static chosenInitialized = false;
  constructor() {
    $("html, body").animate({scrollTop: 0}, 0);
  }
  ngAfterViewInit() {
      if(!InformationPageComponent.chosenInitialized) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
         InformationPageComponent.chosenInitialized = true;
      }
  }
  Gotop(){
    $("html, body").animate({
        scrollTop: 0
    }, 600);
  }
}
