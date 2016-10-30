import {bootstrap}        from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { provide }        from '@angular/core';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import {enableProdMode} from '@angular/core/index';
import {AppComponent}     from './app.component';

import {GOOGLE_MAPS_PROVIDERS,LazyMapsAPILoaderConfig} from 'angular2-google-maps/core';

enableProdMode();
bootstrap(AppComponent,
[         ROUTER_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy}),
          HTTP_PROVIDERS,
          GOOGLE_MAPS_PROVIDERS,
          provide(LazyMapsAPILoaderConfig,
          {
            useFactory: () => {
              let config = new LazyMapsAPILoaderConfig();
              config.apiKey = 'AIzaSyCM_qo-63rwArz7eF9VtXMpoEoqdXzZgqc';
              return config;
            }
          })
]);
