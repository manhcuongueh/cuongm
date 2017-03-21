import {Injectable} from '@angular/core';
import{Http, Response} from'@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeServices{
    private apiUrl="http://58d081e2e1a0d412002e4492.mockapi.io/api/employees";
    private apiUrlCities="http://58d081e2e1a0d412002e4492.mockapi.io/api/city";
    constructor(private _http: Http){

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((res: Response)=>res.json());
    }
    GetCity():Observable<any[]> {
        return this._http.get(this.apiUrlCities).map((res: Response)=>res.json());
    }
}
