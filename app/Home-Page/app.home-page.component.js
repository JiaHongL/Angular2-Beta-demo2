System.register(['@angular/core', '@angular/router-deprecated', '@angular/http', 'rxjs/Rx', '../Service/Service', '../Search/app.search.component', '../List/app.list.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, http_1, Service_1, app_search_component_1, app_list_component_1;
    var HomePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (app_search_component_1_1) {
                app_search_component_1 = app_search_component_1_1;
            },
            function (app_list_component_1_1) {
                app_list_component_1 = app_list_component_1_1;
            }],
        execute: function() {
            HomePageComponent = (function () {
                function HomePageComponent(router, http, _Service, el) {
                    var _this = this;
                    this.router = router;
                    this.http = http;
                    this._Service = _Service;
                    this.el = el;
                    $("html, body").animate({ scrollTop: 0 }, 0);
                    this._Service.Get_Restaurant_Data()
                        .subscribe(function (data) {
                        _this.list_data = data[0];
                    });
                }
                HomePageComponent.prototype.Search = function (key) {
                    var _this = this;
                    if (key == '') {
                        this._Service.Get_Restaurant_Data()
                            .subscribe(function (data) {
                            _this.list_data = data[0];
                        });
                    }
                    else {
                        this._Service.Search_Restaurant_Data(key)
                            .subscribe(function (data) {
                            _this.list_data = data[0];
                        });
                    }
                };
                HomePageComponent.prototype.ngAfterViewInit = function () {
                    if (!HomePageComponent.chosenInitialized) {
                        $(window).scroll(function () {
                            if ($(this).scrollTop() > 100) {
                                $('.scrollup').fadeIn();
                            }
                            else {
                                $('.scrollup').fadeOut();
                            }
                        });
                        HomePageComponent.chosenInitialized = true;
                    }
                };
                HomePageComponent.prototype.Gotop = function () {
                    $("html, body").animate({ scrollTop: 0 }, 600);
                };
                HomePageComponent.chosenInitialized = false;
                HomePageComponent = __decorate([
                    core_1.Component({
                        selector: 'home-page',
                        styleUrls: ["app/Home-Page/app.home-page.component.css"],
                        templateUrl: "app/Home-Page/app.home-page.component.html",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES, app_search_component_1.SearchComponent, app_list_component_1.ListComponent],
                        providers: [http_1.HTTP_PROVIDERS, Service_1.Service],
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, http_1.Http, Service_1.Service, core_1.ElementRef])
                ], HomePageComponent);
                return HomePageComponent;
            }());
            exports_1("HomePageComponent", HomePageComponent);
        }
    }
});
//# sourceMappingURL=app.home-page.component.js.map