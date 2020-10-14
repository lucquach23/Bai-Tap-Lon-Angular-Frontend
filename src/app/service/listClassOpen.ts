import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../lib/authentication.service';

@Injectable(
)

export class listClassOpen {

  constructor(private _http:HttpClient) { }
  private apiUrl='https://localhost:44351/api/ClassRegistion/getListSubjectClass';

  getListClassOpen():Observable<any[]>
  {
     return this._http.get<any[]>(this.apiUrl);
  }
  
}
