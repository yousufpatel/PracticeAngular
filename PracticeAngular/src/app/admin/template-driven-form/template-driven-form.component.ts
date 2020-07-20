import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  firstname: string;
  lastname: string;
  email: string;
  amount: string;
  gender: string;
  country: string;
  msg: string;

  constructor() { }

  ngOnInit(): void {
  }

  onRegisterClick(myform: NgForm) {
    if (myform.valid) {

      console.log(this.firstname);
    } else{
      this.msg = "Invalid"
    }

  }

  resetForm(myform:NgForm){
    myform.reset();
  }

}
