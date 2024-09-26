import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
base_url:string="https://emp-backend-react.onrender.com"
  constructor(private http:HttpClient) { }

  addEmployeeApi(data:any){
    return this.http.post(`${this.base_url}/employees`,data)
  }
  getEmployeeApi(){
    return this.http.get(`${this.base_url}/employees`,)
  }
  
 deleteEmployeeApi(id:any){
    return this.http.delete(`${this.base_url}/employees/${id}`)
  }


  getEmployeeDetailsApi(id:any){
    return this.http.get(`${this.base_url}/employees/${id}`,)
  }

  updateEmployeeApi(id:any,data:any){
    return this.http.put(`${this.base_url}/employees/${id}`,data)
  }

   

}
