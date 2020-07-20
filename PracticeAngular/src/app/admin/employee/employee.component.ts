import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input("x") x : string;
  @Input() companyName : string;
  outputMessage:string="I am child component." 

  @Output() myOutput = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendValues()
  {
    this.myOutput.emit({test : this.outputMessage,test1 : '123'});
  }

}
