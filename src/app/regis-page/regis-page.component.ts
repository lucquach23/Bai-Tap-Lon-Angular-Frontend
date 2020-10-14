import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AuthenticationService } from '../lib/authentication.service';
import {ProfileService} from '../service/profile.service';
import {listClassRegistionedOfStudent} from '../service/listClassRegistionedOfStudent';
import {listClassOpen} from '../service/listClassOpen';
import { SearchPipe } from '../search.pipe';
@Component({
  selector: 'app-regis-page',
  templateUrl: './regis-page.component.html',
  styleUrls: ['./regis-page.component.css'],
  providers:[ProfileService,listClassRegistionedOfStudent,listClassOpen]
})
export class RegisPageComponent implements OnInit{
  constructor(private _pro5:ProfileService,
              private authenticationService: AuthenticationService,
              private _lcos:listClassRegistionedOfStudent,
              private _lco:listClassOpen
              ) 
              { }

  public pro5:any;
  public _listClassRegistionedOfStudent:any[];

  public filterString = "";
  public filtered;
  public invoicess:any[];
  ngOnInit() {
       

    this._pro5.getProfile().subscribe((response:any)=>{
      this.pro5=response[0];});


    this._lcos.getlistClassRegistionedOfStudent().subscribe(
      (res)=>{
        this._listClassRegistionedOfStudent=res;
      });


      this._lco.getListClassOpen().subscribe((res:any)=>{
        this.filtered=res;
        console.log(res);
      });
      
  }
  public list:any=
  [
    {hoten: 'Nguyen Thi Mai', diemthi:9},
    {hoten: 'Tran Thi Anh', diemthi:7.5},
    { hoten: 'Hoang Thi Dung', diemthi:8.3}
  ];
  catten(a:string){
    let n=a.lastIndexOf(' ');
    return a.substr(n+1)+ ' '+a.substr(0,n);
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
 

  confirmRegis(x){
  if(confirm("Bạn có chắc chắn muốn đăng kí học học phần này?")) {
    console.log(x);
  }
}
deleteClass(){
  if(confirm("Bạn có chắc chắn muốn xoá toàn bộ các lớp đã đăng kí?")) {
    console.log('deleted');
  }
}
deleteSingleSubject(){
  if(confirm("Bạn có chắc chắn muốn xoá học phần này?")) {
    console.log('deleted');
  }
}
 

 

}
