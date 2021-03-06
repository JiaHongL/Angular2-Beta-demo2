System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var SourcePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SourcePageComponent = (function () {
                function SourcePageComponent() {
                    $("html, body").animate({ scrollTop: 0 }, 0);
                }
                SourcePageComponent.prototype.ngAfterViewInit = function () {
                    if (!SourcePageComponent.chosenInitialized) {
                        $(window).scroll(function () {
                            if ($(this).scrollTop() > 100) {
                                $('.scrollup2').fadeIn();
                            }
                            else {
                                $('.scrollup2').fadeOut();
                            }
                        });
                        SourcePageComponent.chosenInitialized = true;
                    }
                };
                SourcePageComponent.prototype.Gotop = function () {
                    $("html, body").animate({ scrollTop: 0 }, 600);
                };
                SourcePageComponent.chosenInitialized = false;
                SourcePageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-source',
                        styleUrls: ["app/Source-Page/app.source-page.component.css"],
                        templateUrl: "app/Source-Page/app.source-page.component.html",
                    }), 
                    __metadata('design:paramtypes', [])
                ], SourcePageComponent);
                return SourcePageComponent;
            }());
            exports_1("SourcePageComponent", SourcePageComponent);
        }
    }
});
//# sourceMappingURL=app.source-page.component.js.map