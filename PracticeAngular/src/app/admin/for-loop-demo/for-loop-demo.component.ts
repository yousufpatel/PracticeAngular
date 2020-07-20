import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop-demo',
  templateUrl: './for-loop-demo.component.html',
  styleUrls: ['./for-loop-demo.component.css']
})



export class ForLoopDemoComponent implements OnInit {

  countries: string[];
  employess: any[];

  constructor() { }

  ngOnInit(): void {

    this.countries = ["India", "USA", "Canada", "UK"];
    this.employess = [{ name: "youusf", age: "32", role: ".Net Devloper" },
                      { name: "Nitesh", age: 30, roel: "tester" }
                    ]

     
  }

}
