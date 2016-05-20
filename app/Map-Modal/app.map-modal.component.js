System.register(['@angular/core', 'angular2-google-maps/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var MapModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            MapModalComponent = (function () {
                function MapModalComponent() {
                    // google maps zoom level
                    this.zoom = 18;
                    this.markers = [];
                    this.Modal_Content2 = [];
                    this.Is_Open2 = { status: false };
                    this.test = '123';
                }
                MapModalComponent = __decorate([
                    core_1.Injectable(),
                    core_1.Component({
                        selector: 'my-map-modal',
                        directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
                        styleUrls: ["app/Map-Modal/app.map-modal.component.css"],
                        templateUrl: "app/Map-Modal/app.map-modal.component.html",
                        properties: ["Modal_Content2", "Is_Open2", "Get_lat", "Get_lng"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapModalComponent);
                return MapModalComponent;
            }());
            exports_1("MapModalComponent", MapModalComponent);
        }
    }
});
//# sourceMappingURL=app.map-modal.component.js.map