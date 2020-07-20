import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateDrivenFormComponent } from './admin/template-driven-form/template-driven-form.component';
import { ForLoopDemoComponent } from './admin/for-loop-demo/for-loop-demo.component';
import { CompanyComponent } from './admin/company/company.component';
import { ViewchilddemoComponent } from './admin/viewchilddemo/viewchilddemo.component';


const routes: Routes = [{ path: 'templatedrivenform', component: TemplateDrivenFormComponent },
                        {path : 'ForLoopDemo',component : ForLoopDemoComponent},
                        {path: "company",component : CompanyComponent},
                        {path : "viewchilddemo",component:ViewchilddemoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
