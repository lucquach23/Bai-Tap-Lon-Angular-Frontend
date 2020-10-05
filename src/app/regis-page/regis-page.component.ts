import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regis-page',
  templateUrl: './regis-page.component.html',
  styleUrls: ['./regis-page.component.css']
})
export class RegisPageComponent {

  constructor() { }

  filterString = "";
  filtered;

  invoices:any[] =[
    {
     mahp_invoice:'m1',
      tenhp_invoice: 'Toán rời rạc',
      giangvien_invoice: 'Nguyễn Quang Hoan',
      sotc_invoice: '3',
      phuongthuc_invoice: 'offline',
      thoigian_invoice: 'sáng thứ 3,6',
      tuanhoc_invoice: '234567',
      sosv_invoice: 23,
      trangthai_invoice: 'not enough'     
    },{
      mahp_invoice:'m2',
      tenhp_invoice: 'Mạng máy tính',
      giangvien_invoice: 'Vũ khánh quý',
      sotc_invoice: '3',
      phuongthuc_invoice: 'offline',
      thoigian_invoice: 'sáng thứ 3,6',
      tuanhoc_invoice: '234567',
      sosv_invoice: 23,
      trangthai_invoice: 'not enough'     
    },
    {
      mahp_invoice:'m3',
      tenhp_invoice: 'Cấu trúc dữ liệu và giải thuật',
      giangvien_invoice: 'Nguyễn hải năng',
      sotc_invoice: '4',
      phuongthuc_invoice: 'offline',
      thoigian_invoice: 'sáng thứ 3,6',
      tuanhoc_invoice: '234567',
      sosv_invoice: 23,
      trangthai_invoice: 'not enough'     
    },{
      mahp_invoice:'m4',
      tenhp_invoice: 'Chuyên đề 3',
      giangvien_invoice: 'Vũ Xuân thắng',
      sotc_invoice: '3',
      phuongthuc_invoice: 'offline',
      thoigian_invoice: 'sáng thứ 3,6',
      tuanhoc_invoice: '234567',
      sosv_invoice: 23,
      trangthai_invoice: 'not enough'     
    },
    {
      mahp_invoice:'m5',
      tenhp_invoice: 'Web API',
      giangvien_invoice: 'Nguyễn Văn Quyết',
      sotc_invoice: '3',
      phuongthuc_invoice: 'offline',
      thoigian_invoice: 'sáng thứ 3,6',
      tuanhoc_invoice: '234567',
      sosv_invoice: '23',
      trangthai_invoice: 'not enough'     
    },{
      mahp_invoice:'m6',
      tenhp_invoice: 'Toán rời rạc',
      giangvien_invoice: 'Nguyễn Quang Hoan',
      sotc_invoice: '3',
      phuongthuc_invoice: 'offline',
      thoigian_invoice: 'sáng thứ 3,6',
      tuanhoc_invoice: '234567',
      sosv_invoice: '23',
      trangthai_invoice: 'not enough'     
    },
    {
      mahp_invoice:'m7',
      tenhp_invoice: 'Toán rời rạc',
      giangvien_invoice: 'Nguyễn Quang Hoan',
      sotc_invoice: '3',
      phuongthuc_invoice: 'offline',
      thoigian_invoice: 'sáng thứ 3,6',
      tuanhoc_invoice: '234567',
      sosv_invoice: '23',
      trangthai_invoice: 'not enough'     
    },{
      mahp_invoice:'m8',
      tenhp_invoice: 'Toán rời rạc',
      giangvien_invoice: 'Nguyễn Quang Hoan',
      sotc_invoice: '3',
      phuongthuc_invoice: 'offline',
      thoigian_invoice: 'sáng thứ 3,6',
      tuanhoc_invoice: '234567',
      sosv_invoice: 23,
      trangthai_invoice: 'not enough'     
    },
  ]



 
  ngOnInit() {
    this.onFilterChange();
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
  onFilterChange() {
    this.filtered = this.invoices.filter((invoice) => this.isMatch(invoice));
  }

  isMatch(item) {
    if (item instanceof Object) {
      return Object.keys(item).some((k) => this.isMatch(item[k]));
    } else {
      return item.toString().indexOf(this.filterString) > -1
    }
  }
}
