import {bootstrap}        from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { provide }        from '@angular/core';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import {enableProdMode} from '@angular/core/index';
import {AppComponent}     from './app.component';

enableProdMode();
bootstrap(AppComponent, [ROUTER_PROVIDERS,
          provide(LocationStrategy, {useClass: HashLocationStrategy}),HTTP_PROVIDERS]);
