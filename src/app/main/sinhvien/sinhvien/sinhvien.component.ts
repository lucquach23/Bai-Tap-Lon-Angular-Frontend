import { Component, OnInit } from '@angular/core';
import {listClassOpen} from '../../../service/listClassOpen';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css'],
  providers:[listClassOpen]
})
export class SinhvienComponent implements OnInit {

  constructor(private _lco:listClassOpen,private _http:HttpClient) { }
  selected:string="";
  listFaculty;
  showl=false;
  listclasmajor;
  show_tb_dsl=false;
  show_tb_dslcsv=false;
  list_tb_dsl;
  list_tb_dslcsv;
  ngOnInit(): void {
    this._lco.getListFaculty().subscribe((res:any)=>{
      this.listFaculty=res;
      console.log(this.listFaculty);
    });
  }
  findsv(x)
  {
    this.show_tb_dsl=false;
    this.show_tb_dslcsv=true;
    this._lco.ListCObyidsv(x.value).subscribe((res:any)=>{
      this.list_tb_dslcsv=res;
    });
  }
  selectOption(id:string)
  {
    this.showl=true;
  }
  select_idl(id:string)
  {
    this.show_tb_dslcsv=false;
    this.show_tb_dsl=true;
  }
}
