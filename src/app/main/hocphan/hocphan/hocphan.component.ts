import { Component, OnInit } from '@angular/core';
import {listClassOpen} from '../../../service/listClassOpen';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hocphan',
  templateUrl: './hocphan.component.html',
  styleUrls: ['./hocphan.component.scss'],
  providers:[listClassOpen]
})
export class HocphanComponent implements OnInit {
  errorMessage: any;
  constructor(private _lco:listClassOpen,private _http:HttpClient) { }

  public listk;
  ngOnInit(): void {
    this._lco.getListFaculty().subscribe((res:any)=>{
      this.listk=res;
      //console.log(this.listFaculty);
    });
  }
  public listsv;
  public listhp;
  public showhp=false;
  public showtb=false;
  public listsvdkhp;
  getidhp(x){
    this.showtb=true;
    this._lco.getlistsvhp(x.value).subscribe((res:any)=>{
      this.listsvdkhp=res;
      //console.log(this.listFaculty);
    });
  }
  selectOption(x:string)
  {
    this.showhp=true;
    this._lco.listhpbyk(x).subscribe((res:any)=>{
      this.listhp=res;
      //console.log(this.listFaculty);
    });
  }
  select_hp(x:string)
  {
    this.showtb=true;
    this._lco.getlistsvhp(x).subscribe((res:any)=>{
      this.listsvdkhp=res;
      //console.log(this.listFaculty);
    });
  }
}