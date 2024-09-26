import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  formStatus:any=false
  profileImage: any = "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png"
  adminProfile:any={
    image:"",email:"",password:""
  }

  @Output() adminEvent=new EventEmitter()

  toggleStatus(){
    this.formStatus=!this.formStatus
  }

  constructor(private admin:AdminService, private toastr:ToastrService, private router:Router){

  }

  ngOnInit():void{
    this.admin.getAdmin().subscribe({
      next:(res:any)=>{
        this.adminProfile=res
      console.log(this.adminProfile);
      if(res.image){
        this.adminProfile.image=res.image
        this.profileImage=res.image
      }
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  getFiles(e:any){
    const file=e.target.files[0]
    const fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event);
      this.profileImage=event.target.result
      this.adminProfile.image=event.target.result
    }
  }

  handleSubmit(){
    console.log(this.adminProfile);
    const headerobj = new HttpHeaders()
    headerobj.set('Content-Type','multipart/form-data')
    this.admin.updateAdmin(this.adminProfile,headerobj).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.toastr.success("Profile Updated")
        this.toggleStatus()
        sessionStorage.setItem('admin',JSON.stringify(res))
        this.adminEvent.emit(res.email)
        // this.router.navigateByUrl("/")
      },
      error:(err:any)=>{
        console.log(err);
        this.toastr.error(err)
      }
    })
  }
}
