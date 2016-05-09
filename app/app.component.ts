/// <reference path="../typings/jquery/jquery.d.ts" />
declare var $: JQueryStatic;

import { Component, OnInit ,ElementRef,AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router,ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig,OnActivate} from '@angular/router-deprecated';
import {HomePageComponent} from './Home-Page/app.home-page.component';
import {SourcePageComponent} from './Source-Page/app.source-page.component';
import {InformationPageComponent} from './Information-Page/app.information-page.component';

@Component({
  selector: 'my-app',
  styles: [`
  `],
  template: `
  <div class="Index">
    <header>
      <div class="logo">
        <img class="logo_img" src="images/pot.png" alt="Smiley face">
        <span class="logo_title">
          <p>Rustic Cuisine</p>
        </span>
      </div>
      <div id='menu1'>
        <i class="fa fa-bars fa-2x" aria-hidden="true" (click)="Menu_Clikc()"></i>
        <i class="fa fa-times fa-2x" aria-hidden="true" (click)="Menu_Clikc()"></i>
      </div>
      <div id='menu'>
        <ul>
          <a class="home menu_item"  [routerLink]="['./Home']">
            <li>
                <span>首頁</span>
            </li>
          </a>
          <a class="source menu_item"   [routerLink]="['./Source']">
            <li>
                <span>資料來源</span>
            </li>
          </a>
          <a class="information menu_item"  [routerLink]="['./Information']">
            <li>
                <span>作者資訊</span>
            </li>
          </a>
        </ul>
      </div>
    </header>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
    <footer>
      <div class="footer_data">
       資料來源:行政院農業委員會資料開放平台 [2015] [農村地方美食小吃特色料理 COAOPD-API-EIR071 3.0]
      </div>
      <div class="footer_icon">
        Icons made by
        <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> &&
        <a href="http://www.flaticon.com/authors/elegant-themes" title="Elegant Themes">Elegant Themes</a> &&
        <a href="http://www.flaticon.com/authors/baianat" title="Baianat">Baianat</a> &&
        <a href="http://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon</a>
        from
        <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a>
        is licensed by
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      </div>
      <div class="footer_copyright">
        © 2016 JHL All rights reserved.
      </div>
    </footer>
  </div>
  `,
  providers:  [HomePageComponent],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/home',  component: HomePageComponent,as:'Home'},
  {path: '/source',  component: SourcePageComponent,as:'Source'},
  {path: '/information',  component: InformationPageComponent,as:'Information'},
   {path:"/*path", redirectTo:['Home'] }
])
export class AppComponent  implements AfterViewInit , OnInit{
  static chosenInitialized = false;
  constructor(private router: Router,private el:ElementRef,private location: Location) {
    router.subscribe(path => {
      $('.menu_item').removeClass('active');
      var url = this.location.platformStrategy.path();
      var status = url.replace("/", "");
      if(status=='home'){
        $('.home').addClass('active');
      }
      if(status=='source'){
        $('.source').addClass('active');
      }
      if(status=='information'){
        $('.information').addClass('active');
      }
    });
  }
  Menu_Clikc(){
    if($('#menu').hasClass("active")){
      $('#menu').removeClass('active');
      $('#menu1').removeClass('active');
    }else{
      $('#menu').addClass('active');
      $('#menu1').addClass('active');
    }
  }
  ngAfterViewInit() {
      // if(!AppComponent.chosenInitialized) {
      //    AppComponent.chosenInitialized = true;
      // }
  }
  ngOnInit() {
    // this.router.navigateByUrl('/home');
  }
}

// if($('.dropdown-control').hasClass("active")||$('.dropdown-control').hasClass("open")){
// }
