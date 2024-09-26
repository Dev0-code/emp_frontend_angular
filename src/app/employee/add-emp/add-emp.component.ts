import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrl: './add-emp.component.css'
})
export class AddEmpComponent {

empForm:any={
  eid:"",
  name:"",
  phone:"",
  status:""
}
constructor(private emp:EmployeeService,private toastr:ToastrService,private router:Router){}

submitted(e:any){
  e.preventDefault()
  console.log(this.empForm)
  this.emp.addEmployeeApi(this.empForm).subscribe({
    next:(res:any)=>{
      this.toastr.success("Employee Added!")
      this.router.navigateByUrl('/employee')
    },
    error:(err:any)=>{
      console.log(err)
      this.toastr.error("something went wrong")
    }
  })
}

}
