System.register(['@angular/core', '@angular/common', '../Big-Modal/app.big-modal.component', '../Point-Modal/app.point-modal.component'], function(exports_1, context_1) {
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
    var core_1, common_1, app_big_modal_component_1, app_point_modal_component_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_big_modal_component_1_1) {
                app_big_modal_component_1 = app_big_modal_component_1_1;
            },
            function (app_point_modal_component_1_1) {
                app_point_modal_component_1 = app_point_modal_component_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                    this.pass_data = [];
                    this.Open_modal = { status: false };
                    this.Modal_Data = [];
                    this.Open_modal2 = { status: false };
                    this.Modal_Data2 = [];
                }
                ListComponent.prototype.Open = function (d) {
                    if (this.Open_modal2.status == true) {
                        this.Open_modal.status = false;
                    }
                    else {
                        this.Open_modal.status = true;
                        this.Modal_Data = d;
                    }
                };
                ListComponent.prototype.Open2 = function (d) {
                    this.Open_modal2.status = true;
                    this.Modal_Data2 = d;
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-list',
                        styleUrls: ["app/List/app.list.component.css"],
                        templateUrl: "app/List/app.list.component.html",
                        directives: [common_1.NgClass, app_big_modal_component_1.BigModalComponent, app_point_modal_component_1.PointModalComponent],
                        properties: ["pass_data"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=app.list.component.js.map