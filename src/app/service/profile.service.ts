import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../lib/authentication.service';

@Injectable(
)

export class ProfileService {

  constructor(private _http:HttpClient,private authenticationService: AuthenticationService) { }
  private apiUrl='https://localhost:44351/api/Accounts/getAccByUserName/'+this.authenticationService.userValue.userName;

  getProfile():Observable<any[]>
  {
     return this._http.get<any[]>(this.apiUrl);
  }

  
}
