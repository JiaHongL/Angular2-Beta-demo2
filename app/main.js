System.register(['@angular/platform-browser-dynamic', '@angular/router-deprecated', '@angular/core', '@angular/common', '@angular/http', '@angular/core/index', './app.component', 'angular2-google-maps/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, router_deprecated_1, core_1, common_1, http_1, index_1, app_component_1, core_2;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            index_1.enableProdMode();
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
                http_1.HTTP_PROVIDERS,
                core_2.GOOGLE_MAPS_PROVIDERS,
                core_1.provide(core_2.LazyMapsAPILoaderConfig, {
                    useFactory: function () {
                        var config = new core_2.LazyMapsAPILoaderConfig();
                        config.apiKey = 'AIzaSyCM_qo-63rwArz7eF9VtXMpoEoqdXzZgqc';
                        return config;
                    }
                })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map