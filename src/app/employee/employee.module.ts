import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { SideComponent } from '../side/side.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';





export const routes:Routes=[
  {path:'',component:EmpListComponent},
  {path:'add',component:AddEmpComponent},
  {path:'edit/:id',component:EmpEditComponent}
]



@NgModule({
  declarations: [
    
    EmpListComponent,
    EmpEditComponent,
    AddEmpComponent,
    SearchPipe
  
  ],
  imports: [
    CommonModule ,
    RouterModule.forChild(routes),
    SideComponent,
    RouterLink,
    HttpClientModule,
    FormsModule
  ]
})
export class EmployeeModule { }
