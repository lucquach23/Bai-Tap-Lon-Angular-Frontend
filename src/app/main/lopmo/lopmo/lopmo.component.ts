import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../../lib/authentication.service';
import {listClassOpen} from '../../../service/listClassOpen';

@Component({
  selector: 'app-lopmo',
  templateUrl: './lopmo.component.html',
  styleUrls: ['./lopmo.component.css'],
  providers:[listClassOpen]
})
export class LopmoComponent implements OnInit {

  
  constructor(private _http:HttpClient,
              private authenticationService: AuthenticationService,
              private _lco:listClassOpen,
              ) { }
  public listFaculty;
  ngOnInit(): void {

    this._lco.getListFaculty().subscribe((res:any)=>{
      this.listFaculty=res;
      console.log(this.listFaculty);
    });
  } 
  takeIDFaculty(f)
  {
    const corporationObj = f.value.selectedCorp;
    console.log(corporationObj);
  }
  public show=false;
  selected: string = "";
 public listCObyFaculty;
  selectOption(id: string) {
    //getted from event
    
    console.log(id);
    this.show=true;
    this._lco.GetClassOpenFaculty(id).subscribe((res:any)=>{
      this.listCObyFaculty=res;
      console.log(this.listCObyFaculty);
    });
    //getted from binding
    // console.log(this.selected)
  }
  
} 


   
