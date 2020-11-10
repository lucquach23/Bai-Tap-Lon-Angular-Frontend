import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {listClassOpen} from '../../../service/listClassOpen';
import {cr} from '../../../models/cr'
@Component({
  selector: 'app-lopmo',
  templateUrl: './lopmo.component.html',
  styleUrls: ['./lopmo.component.css'],
  providers:[listClassOpen]
})
export class LopmoComponent implements OnInit {
  errorMessage: any;

  
  constructor(private _http:HttpClient,
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
    this.show=true;
    this._lco.GetClassOpenFaculty(id).subscribe((res:any)=>{
      this.listCObyFaculty=res;
      console.log(this.listCObyFaculty);
    });
  }
  public deleteCO(id)
  {
    if(confirm("Bạn có chắc chắn muốn xoá lớp đã đăng kí này?")) {
      this._http.delete('https://localhost:44351/api/ClassRegisters/'+id)
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
    maco:any;
    magv:any;
    id_subject:any;
    name_subject:any;
    number_of_credits:any;
    type:any;
    name_faculty:any;
    th:any;
    time:any;
    week:any;
    room:any;
  public sua(id_lecturers,id_ClassRegister,id_subject,number_of_credits,name_subject,type,room,thu,time,week)
  {
    this.maco=id_ClassRegister;
    this.magv=id_lecturers;
    this.th=thu;
    this.time=time;
    this.week=week;
    this.room=room;
    this.id_subject=id_subject;
    this.name_subject=name_subject;
    this.number_of_credits=number_of_credits;
    this.type=type;
  }
  onSubmit(value: any) {
    const c:cr=new cr();
    c.idClassRegister=this.maco;
    c.idLecturers=this.magv;
    c.idSemester='K1-2021';
    c.idSubject=(this.id_subject).trim();
    c.room=value.phong;
    c.thu=value.thu;
    c.time=this.gettime(value.time);
    c.week=value.tuan;

    console.log(c);
    this._http.put<cr>('https://localhost:44351/api/ClassRegisters/'+c.idClassRegister, c)
        .subscribe((res)=>{
          console.log(res);
          alert('Sửa thành công!');
          //location.reload();
        });

  }
  public listCity=[
    {id:1,name:'Sáng: 7:45-11:00'},
    {id:2,name:'Chiều: 13:30-16:45'}
  ];
  gettime(x:number)
{
if (x==1) return 'Sáng: 7:45-11:00';
if(x==2) return 'Chiều: 13:30-16:45';
}
} 


   
