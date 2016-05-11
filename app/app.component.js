System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', './Home-Page/app.home-page.component', './Source-Page/app.source-page.component', './Information-Page/app.information-page.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_deprecated_1, app_home_page_component_1, app_source_page_component_1, app_information_page_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (app_home_page_component_1_1) {
                app_home_page_component_1 = app_home_page_component_1_1;
            },
            function (app_source_page_component_1_1) {
                app_source_page_component_1 = app_source_page_component_1_1;
            },
            function (app_information_page_component_1_1) {
                app_information_page_component_1 = app_information_page_component_1_1;
            }],
        execute: function() {
            /// <reference path="../typings/jquery/jquery.d.ts" />
            AppComponent = (function () {
                function AppComponent(router, location) {
                    var _this = this;
                    this.router = router;
                    this.location = location;
                    router.subscribe(function (path) {
                        $('.menu_item').removeClass('active');
                        var url = _this.location.platformStrategy.path();
                        var status = url.replace("/", "");
                        if (status == 'home') {
                            $('.home').addClass('active');
                        }
                        if (status == 'source') {
                            $('.source').addClass('active');
                        }
                        if (status == 'information') {
                            $('.information').addClass('active');
                        }
                    });
                }
                AppComponent.prototype.Menu_Clikc = function () {
                    if ($('#menu').hasClass("active")) {
                        $('#menu').removeClass('active');
                        $('#menu1').removeClass('active');
                    }
                    else {
                        $('#menu').addClass('active');
                        $('#menu1').addClass('active');
                    }
                };
                AppComponent.chosenInitialized = false;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n  "],
                        template: "\n  <div class=\"Index\">\n    <header>\n      <div class=\"logo\">\n        <img class=\"logo_img\" src=\"images/pot.png\" alt=\"Smiley face\">\n        <span class=\"logo_title\">\n          <p>Rustic Cuisine</p>\n        </span>\n      </div>\n      <div id='menu1'>\n        <i class=\"fa fa-bars fa-2x\" aria-hidden=\"true\" (click)=\"Menu_Clikc()\"></i>\n        <i class=\"fa fa-times fa-2x\" aria-hidden=\"true\" (click)=\"Menu_Clikc()\"></i>\n      </div>\n      <div id='menu'>\n        <ul>\n          <a class=\"home menu_item\"  [routerLink]=\"['./Home']\">\n            <li>\n                <span>\u9996\u9801</span>\n            </li>\n          </a>\n          <a class=\"source menu_item\"   [routerLink]=\"['./Source']\">\n            <li>\n                <span>\u8CC7\u6599\u4F86\u6E90</span>\n            </li>\n          </a>\n          <a class=\"information menu_item\"  [routerLink]=\"['./Information']\">\n            <li>\n                <span>\u4F5C\u8005\u8CC7\u8A0A</span>\n            </li>\n          </a>\n        </ul>\n      </div>\n    </header>\n    <div class=\"main\">\n      <router-outlet></router-outlet>\n    </div>\n    <footer>\n      <div class=\"footer_data\">\n       \u8CC7\u6599\u4F86\u6E90:\u884C\u653F\u9662\u8FB2\u696D\u59D4\u54E1\u6703\u8CC7\u6599\u958B\u653E\u5E73\u53F0 [2015] [\u8FB2\u6751\u5730\u65B9\u7F8E\u98DF\u5C0F\u5403\u7279\u8272\u6599\u7406 COAOPD-API-EIR071 3.0]\n      </div>\n      <div class=\"footer_icon\">\n        Icons made by\n        <a href=\"http://www.flaticon.com/authors/madebyoliver\" title=\"Madebyoliver\">Madebyoliver</a> &&\n        <a href=\"http://www.flaticon.com/authors/elegant-themes\" title=\"Elegant Themes\">Elegant Themes</a> &&\n        <a href=\"http://www.flaticon.com/authors/baianat\" title=\"Baianat\">Baianat</a> &&\n        <a href=\"http://www.flaticon.com/authors/icomoon\" title=\"Icomoon\">Icomoon</a>\n        from\n        <a href=\"http://www.flaticon.com\" title=\"Flaticon\">www.flaticon.com</a>\n        is licensed by\n        <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a>\n      </div>\n      <div class=\"footer_copyright\">\n        \u00A9 2016 JHL All rights reserved.\n      </div>\n    </footer>\n  </div>\n  ",
                        providers: [app_home_page_component_1.HomePageComponent],
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/home', component: app_home_page_component_1.HomePageComponent, as: 'Home' },
                        { path: '/source', component: app_source_page_component_1.SourcePageComponent, as: 'Source' },
                        { path: '/information', component: app_information_page_component_1.InformationPageComponent, as: 'Information' },
                        { path: "/*path", redirectTo: ['Home'] }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, common_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// if($('.dropdown-control').hasClass("active")||$('.dropdown-control').hasClass("open")){
// }
//# sourceMappingURL=app.component.js.map