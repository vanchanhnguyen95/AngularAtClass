import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-form',
  templateUrl: './bt-form.component.html',
  styleUrls: ['./bt-form.component.css']
})
export class BtFormComponent implements OnInit {

  public Email:string = "[(ngModel)]";

  public FullName:string = "";


  Submit(value:string){
      this.FullName = value;
  }



  constructor() { }

  ngOnInit() {
  }

}
