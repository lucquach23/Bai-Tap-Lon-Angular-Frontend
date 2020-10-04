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



  // invoices:any[] =[
  //   {
  //     number_invoice: '996',
  //     note_invoice: '0001',
  //     state_invoice: 'pending',
  //     customer_invoice: 'Johan Corrales',
  //     date_invoice: '2018-10-30',
  //     days_invoice: '30',
  //     expiration_invoice: '2018-11-30',
  //     payment_invoice: 'Credit',

  //   },
  //   {
  //     number_invoice: '997',
  //     note_invoice: 'N/A',
  //     state_invoice: 'Pay out',
  //     customer_invoice: 'Richard Castle',
  //     date_invoice: '2018-10-30',
  //     days_invoice: '0',
  //     expiration_invoice: 'N/A',
  //     payment_invoice: 'Credit'
  //   },
  //   {
  //     number_invoice: '998',
  //     note_invoice: 'N/A',
  //     state_invoice: 'pending',
  //     customer_invoice: 'Kyara Wolff',
  //     date_invoice: '2018-10-30',
  //     days_invoice: '30',
  //     expiration_invoice: '2018-11-30',
  //     payment_invoice: 'Credit'
  //   },
  //   {
  //     number_invoice: '999',
  //     note_invoice: 'N/A',
  //     state_invoice: 'pending',
  //     customer_invoice: 'Donaldo Trumpete',
  //     date_invoice: '2018-10-30',
  //     days_invoice: '30',
  //     expiration_invoice: '2018-11-30',
  //     payment_invoice: 'Credit'
  //   },
  //   {
  //     number_invoice: '1000',
  //     note_invoice: '0001',
  //     state_invoice: 'pending',
  //     customer_invoice: 'Mark Wahlber',
  //     date_invoice: '2018-10-30',
  //     days_invoice: '30',
  //     expiration_invoice: '2018-11-30',
  //     payment_invoice: 'Cash'
  //   },
  //   {
  //     number_invoice: '1001',
  //     note_invoice: 'N/A',
  //     state_invoice: 'Pay out',
  //     customer_invoice: 'Ryan Reynolds',
  //     date_invoice: '2018-10-30',
  //     days_invoice: '0',
  //     expiration_invoice: 'N/A',
  //     payment_invoice: 'Cash'
  //   },
  // ]
  ngOnInit() {
    this.onFilterChange();
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
