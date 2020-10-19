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
  private apiUrlGv='https://localhost:44351/api/Accounts/getInfoGv/'+this.authenticationService.userValue.userName;
  private apiListsub='https://localhost:44351/api/ClassRegistion/getListSubject/'+this.authenticationService.userValue.id_faculty;
  getProfile():Observable<any[]>
  {
    return this._http.get<any[]>(this.apiUrl);
  }
  getProfileGV():Observable<any[]>
  {
    return this._http.get<any[]>(this.apiUrlGv);
  }
  getListSubject()
  {
    return this._http.get<(any[])>(this.apiListsub);
  }
}
