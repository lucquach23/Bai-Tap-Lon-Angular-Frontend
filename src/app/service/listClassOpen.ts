import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../lib/authentication.service';
import {themCO} from '../models/role'
const httpOption={headers:new HttpHeaders({'Content-Type':'application/json'})}
@Injectable(
)
export class listClassOpen {
  constructor(private _http:HttpClient) { }
  private apiUrl='https://localhost:44351/api/ClassRegistion/getListSubjectClass';
  private addurl ='https://localhost:44351/api/ListCrs';
  
  getListClassOpen():Observable<any[]>
  {
     return this._http.get<any[]>(this.apiUrl);
  }
  
addclassR(themco1:themCO):Observable<themCO>
{
  return this._http.post<themCO>(this.addurl,themco1,httpOption)
  .pipe(tap((s:themCO)=>console.log(`data= ${JSON.stringify(s)}`)),
  catchError(err=>of(new themCO())));
}
deleteCO( obj: any) {
  const body = JSON.stringify(obj);
  return this._http
    .post<any>('https://localhost:44351/api/ClassRegistion/deleteCO', body,httpOption)
    .pipe(
      map(res => {
        return res;
      })
    );      
}



}
