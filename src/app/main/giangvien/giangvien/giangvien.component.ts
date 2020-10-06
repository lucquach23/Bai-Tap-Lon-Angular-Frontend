import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-giangvien',
  templateUrl: './giangvien.component.html',
  styleUrls: ['./giangvien.component.css']
})
export class GiangvienComponent implements OnInit {

  constructor(private http:HttpClient) { }
  values:any;
  ngOnInit(): void {
    this.getListFaculty();
  }
  getListFaculty(){
    return this.http.get("https://localhost:44351/api/Faculties").subscribe(response=>{
      console.log(response);
      this.values=response;
    },error =>{
      console.log(error);
    });
    
  }




}
