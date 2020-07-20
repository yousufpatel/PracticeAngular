import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchilddemo',
  templateUrl: './viewchilddemo.component.html',
  styleUrls: ['./viewchilddemo.component.css']
})
export class ViewchilddemoComponent implements OnInit {

  @ViewChild('Myname') test:string; 
  firstName :string = 'test';
  constructor() { }

  ngOnInit(): void {

    console.log(this.test);
  }

}
