import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent implements OnInit {
employees:any=[]
key:any=""
constructor(private emp:EmployeeService,private toastr:ToastrService){}

ngOnInit(): void {
  console.log("loading");
  this.emp.getEmployeeApi().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.employees=res
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
  
}

deleteEmp(id:any){
  this.emp.deleteEmployeeApi(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.toastr.success("employee deleted")
      this.ngOnInit()
      
    },
    error:(err:any)=>{
      this.toastr.error(err)
    }
  })
}

sortById(){
  this.employees.sort((a:any,b:any)=>a.eid-b.eid)
}

sortByName(){
  this.employees.sort((a:any,b:any)=>a.name.localeCompare(b.name))
}

exportToPdf(){
  const doc=new jsPDF()

  const head:any=[['EmpId','Name','Phone Number','Status']]
  const body:any=[]
  this.employees.forEach((item:any)=>{
    body.push([item.eid,item.name,item.phone,item.status])
  })
  doc.setFontSize(18)
  doc.text("All EmployeeList",10,10)
 autoTable(doc,{head,body})
 doc.output('dataurlnewwindow')
 doc.save('employeelist.pdf')
}

}
