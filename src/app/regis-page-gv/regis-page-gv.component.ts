import { Component, OnInit,ViewChild } from '@angular/core';
import { MustMatch } from './../helpers/must-match.validator';
import { FileUpload } from 'primeng/fileupload';
import { FormBuilder, Validators} from '@angular/forms';
import { BaseComponent } from './../common/base-component';
import { AuthenticationService } from '../lib/authentication.service';
import {ProfileService} from '../service/profile.service';
@Component({
  selector: 'app-regis-page-gv',
  templateUrl: './regis-page-gv.component.html',
  styleUrls: ['./regis-page-gv.component.css'],
  providers:[ProfileService]
})
export class RegisPageGVComponent  implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private _pro5:ProfileService,) {}

    public pro5:any[];
    submitted = false;
    public listCity=[
      {id:1,name:'Sáng: 7:45-11:00'},
      {id:2,name:'Chiều: 13:30-16:45'},
      {id:3,name:'Tối: 17:00-20:30'},
    ];

    public filtered;
    public filterString = "";

  onSubmit(value: any) {
    console.log(value);
  }

 
  ngOnInit() {
    console.log(this.authenticationService.userValue)
   
    this._pro5.getListSubject().subscribe((res:any)=>{
      this.filtered=res;
    });
    this.test();
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

  test(){
  this._pro5.getProfileGV().subscribe((response:any)=>{
    this.pro5=response;});
    for(let i of this.pro5)
    {
      console.log
      (i.idLecturers,i.name,i.idDegree,
        i.email,i.phone,
        i.idDepartmentNavigation.nameDepartment,
        i.idDepartmentNavigation.idFacultyNavigation.nameFaculty);
    }

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
