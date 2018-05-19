import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cb-directive',
  templateUrl: './cb-directive.component.html',
  styleUrls: ['./cb-directive.component.css']
})
export class CbDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public DSNV:Array<any> = [
    {HoTen:"Khải", Tuoi:18},
    {HoTen:"Minh", Tuoi:20},
    {HoTen:"Hằng", Tuoi:27},
    {HoTen:"Nam", Tuoi:17}
  ];



}
