import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_url="https://emp-backend-react.onrender.com"

  constructor(private  http:HttpClient) { }

  getAdmin(){
    return this.http.get(`${this.base_url}/users/1`)
  }

  updateAdmin(data:any,header:any){
    return this.http.put(`${this.base_url}/users/1`,data,{
      headers:header
    })
  }

  isLoggedIn(){
    if(sessionStorage.getItem('admin')){
      return true
    }else{
      return false
    }
  }

}
