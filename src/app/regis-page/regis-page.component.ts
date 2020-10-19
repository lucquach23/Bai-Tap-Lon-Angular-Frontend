import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AuthenticationService } from '../lib/authentication.service';
import {ProfileService} from '../service/profile.service';
import {listClassRegistionedOfStudent} from '../service/listClassRegistionedOfStudent';
import {listClassOpen} from '../service/listClassOpen';
import { SearchPipe } from '../search.pipe';
import {themCO} from 'src/app/models/role'
import { BaseComponent } from '../lib/base-component';
// import { map, tap, takeUntil} from 'rxjs/operators';
// import {Observable, Subject, of, from} from 'rxjs'
import 'rxjs/add/operator/takeUntil';
import { window } from 'rxjs/operators';
@Component({
  selector: 'app-regis-page',
  templateUrl: './regis-page.component.html',
  styleUrls: ['./regis-page.component.css'],
  providers:[ProfileService,listClassRegistionedOfStudent,listClassOpen]
})
export class RegisPageComponent extends BaseComponent implements OnInit{
  errorMessage: any;
  constructor(private _pro5:ProfileService,
              private authenticationService: AuthenticationService,
              private _lcos:listClassRegistionedOfStudent,
              private _lco:listClassOpen,
              injector: Injector,
              private _http:HttpClient
              
              ) 
              {super(injector); }

  public pro5:any;
  public _listClassRegistionedOfStudent:any[];

  public filterString = "";
  public filtered;
  public sumTC:number;
  public invoicess:any[];
  ngOnInit() {
       
    this._pro5.getProfile().subscribe((response:any)=>{
      this.pro5=response[0];});


    this._lcos.getlistClassRegistionedOfStudent().subscribe(
      (res)=>{
        this._listClassRegistionedOfStudent=res;
        this.sumTC=res.reduce((total,item)=>total+parseInt(item.number_of_credits),0)
      });


      this._lco.getListClassOpen().subscribe((res:any)=>{
        this.filtered=res;
      });
      
  }

  SortDownSL(){
    this.filtered.sort((a,b)=>{
      if( a.slsv>b.slsv) return -1;
      else if( a.slsv<b.slsv) return 1;
      else return 0;
    })
  }
  SortUpSL(){
    this.filtered.sort((a,b)=>{
      if( a.slsv>b.slsv) return 1;
      else if( a.slsv<b.slsv) return -1;
      else return 0;
    })
  }
  SortDownTC(){
    this.filtered.sort((a,b)=>{
      if( a.number_of_credits>b.number_of_credits) return -1;
      else if( a.number_of_credits<b.number_of_credits) return 1;
      else return 0;
    })
  }
  SortUpTC(){
    this.filtered.sort((a,b)=>{
      if( a.number_of_credits>b.number_of_credits) return 1;
      else if( a.number_of_credits<b.number_of_credits) return -1;
      else return 0;
    })
  }


  logout() {
    this.authenticationService.logout();
  } 
 


 public id_student=this.authenticationService.userValue.userName;
  confirmRegis(id_cr){
    if(confirm("Bạn có chắc chắn muốn đăng kí học phần này?")) {
    const sv:themCO=new themCO();
    sv.IdClassRegister=id_cr;
    sv.IdStudent=this.id_student.toUpperCase();
    this._lco.addclassR(sv).subscribe(res=>{
      console.log('dtttt',res)})};
      alert('Thêm thành công!');
      location.reload();   
  }







deleteSingleSubject(dt_id_cr){
  //debugger;
  if(confirm("Bạn có chắc chắn muốn xoá lớp đã đăng kí?")) {
    https://localhost:44351/api/ListCrs/removeCO/GDTC1-GV30/SV1
    this._http.delete('https://localhost:44351/api/ListCrs/removeCO/'+dt_id_cr+'/'+this.id_student)
    .subscribe({
        next: data => {
            alert('Xoá thành công!');
            location.reload();
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
  }
}
deleteAllClass(){
  if(confirm("Bạn có chắc chắn muốn xoá toàn bộ các lớp đã đăng kí?")) {
    this._http.delete('https://localhost:44351/api/ListCrs/removeAll/'+this.id_student)
    .subscribe({
        next: data => {
            alert('Xoá thành công!');
            location.reload();
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
  }
}
 

 

}
