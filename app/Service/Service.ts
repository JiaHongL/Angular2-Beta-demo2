import { Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Service {
  constructor(private _http: Http) {
  }
  Get_Restaurant_Data() {
      return Observable.forkJoin(
        this._http.get('./app/Service/data.json')
        .map((res:Response) => res.json())
      );
  }
}

// var headers = new Headers();
// headers.append("Access-Control-Allow-Origin", "*");
// console.log(headers);
// ,{headers:headers}
