import { Injectable ,EventEmitter} from '@angular/core';
import {HTTP_PROVIDERS, Http,Headers,Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Service {
  constructor(private http: Http) {
  }
  Get_Restaurant_Data() {
      return Observable.forkJoin(
          this.http.get('http://data.coa.gov.tw/Service/OpenData/EzgoTravelFoodStay.aspx')
          .map((res:Response) => res.json())
      );
  }
  Search_Restaurant_Data(key){
    var url= 'http://data.coa.gov.tw/Service/OpenData/EzgoTravelFoodStay.aspx?$filter=City+like+' + key + '+or+Town+like+' + key;
    return Observable.forkJoin(
      this.http.get(url)
        .map((res:Response) => res.json())
    );
  }
}

// var headers = new Headers();
// headers.append("Access-Control-Allow-Origin", "*");
// console.log(headers);
// ,{headers:headers}
