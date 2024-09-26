import { Component, OnInit } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { EmployeeService } from '../employee/services/employee.service';
import { NgIf } from '@angular/common';
import { CalenderComponent } from '../calender/calender.component';
import { ProfileComponent } from '../profile/profile.component';
import { ChartComponent } from '../chart/chart.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SideComponent,NgIf,ChartComponent,ProfileComponent,CalenderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  empCount:any=0
  sideBar:any=false
  adminEmail:any=""

  constructor(private emp:EmployeeService){

  }
  ngOnInit(): void {
    this.emp.getEmployeeApi().subscribe({
      next:(res:any)=>{
this.empCount=res.length()
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })

    this.adminEmail=JSON.parse(sessionStorage.getItem('admin')||'').email
  }

  toggleSideBar(){
    this.sideBar=!this.sideBar
  }

  onAdminchange(e:any){
    this.adminEmail=e
  }
}
