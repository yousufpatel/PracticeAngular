import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  MobileNumber :string = "953824032";

  constructor() { }

  ngOnInit(): void {
   
  }

  GetChildData(data){  
    console.log(data);  
 }  

}
