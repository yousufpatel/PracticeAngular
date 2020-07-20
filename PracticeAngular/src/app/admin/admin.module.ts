import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ForLoopDemoComponent } from './for-loop-demo/for-loop-demo.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewchilddemoComponent } from './viewchilddemo/viewchilddemo.component';


@NgModule({
  declarations: [TemplateDrivenFormComponent, ForLoopDemoComponent, CompanyComponent, EmployeeComponent, ViewchilddemoComponent],
  exports : [TemplateDrivenFormComponent,ForLoopDemoComponent,CompanyComponent,EmployeeComponent,ViewchilddemoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule { }
