import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-oneway-binding',
  templateUrl: './cb-oneway-binding.component.html',
  styleUrls: ['./cb-oneway-binding.component.css']
})
export class CbOnewayBindingComponent implements OnInit {
  //Sử dụng cơ chế onewaybinding
  //Tạo thuộc tính cho thẻ
  public sinhVien = {hoten:"nguyen van a",tuoi:18};

  public name:string="";

  DisplayName(value:string)
  {
    this.name = value;
  }

  constructor() { }

  ngOnInit() {
  }


  

}
