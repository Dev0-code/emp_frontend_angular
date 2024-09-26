import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrl: './emp-edit.component.css'
})
export class EmpEditComponent implements OnInit{

eid:any=""
employee:any={

  id:"",name:"",phone:"",status:""
}

constructor(private ar:ActivatedRoute,private emp:EmployeeService,private toastr:ToastrService,private Router:Router){
this.ar.params.subscribe({
  next:(res:any)=>{
    console.log(res);
    this.eid=res.id
    
  },
  error:(err:any)=>{
    console.log(err);
   

    
  }
})


}

ngOnInit(): void {
  
  this.emp.getEmployeeDetailsApi(this.eid).subscribe({
    next:(res:any)=>{
console.log(res)
this.employee=res
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}

submitted(e:any){
  e.preventDefault()
  console.log(this.employee);
  this.emp.updateEmployeeApi(this.employee.id,this.employee).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.toastr.success("updated successfully")
      this.Router.navigateByUrl('/employee')
    },
    error:(err:any)=>{
      console.log(err);
      this.toastr.error(err)
      
    }
  })
  
}

}
