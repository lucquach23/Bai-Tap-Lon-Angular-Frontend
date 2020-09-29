import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  public menus = [
  {name :'Lớp đăng kí', url:'',icon:'edit',
  childs:[
    {name:'Danh sách lớp mở',url:'user/user'},
    {name:'Học phần', url:'/hocphan'},
    {name:'Giảng Viên', url:'/giangvien'},
    {name:'Sinh Viên', url:'/sinhvien'},
  ]},
  // {name:'Quản lý sinh viên',url:'',icon:'signal',childs:[{name:'Quản lý đơn hàng',url:'/product/order'},{name:'Quản lý loại hàng',url:'/product/type'},{name:'Quản lý sản phẩm',url:'/product/product'}]},
  // {name :'Quản ký giảng viên', url:'',icon:'user'},
  // {name:'QL cơ sở vật chất',url:'',icon:'signal'}

];
  constructor() { } 
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    $('#sidebar-collapse').click(function () {
      setTimeout(() => {
        let event;
        if (typeof (Event) === 'function') {
          event = new Event('resize');
        } else {
          event = document.createEvent('Event');
          event.initEvent('resize', true, true);
        }
        window.dispatchEvent(event);
      }, 100);
      if (!$('#sidebar').hasClass('menu-min')) {
        $('.main-content').css('padding-left', '43px');
        $('.footer-inner').css('left', '43px');
      } else {
        $('.main-content').css('padding-left', '190px');
        $('.footer-inner').css('left', '190px');
      }
    });
    setTimeout(() => {
      let event;
      if (typeof (Event) === 'function') {
        event = new Event('resize');
      } else {
        event = document.createEvent('Event');
        event.initEvent('resize', true, true);
      }
      window.dispatchEvent(event);
    }, 100);
    setTimeout(() => {
      $('.main-content').css('padding-left', $('#sidebar').width() + 1);
      $('.footer-inner').css('left', $('#sidebar').width() + 1);
    }, 100);
  }
}
