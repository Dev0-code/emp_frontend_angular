import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  logForm: any = {
    email: "",
    password: ""
  }
  constructor(private admin: AdminService, private route: Router, private toastr: ToastrService) { }
  submitted() {
    console.log(this.logForm);
    this.admin.getAdmin().subscribe({
      next: (res: any) => {
        console.log(res)
        if (this.logForm.email == res.email && this.logForm.password == res.password) {
          this.toastr.success("Login successful")
          sessionStorage.setItem('admin',JSON.stringify(res))
          this.route.navigateByUrl('/home')
        }
        else {
          this.toastr.error("invalid credentials")
        }
      },
      error: (err: any) => {
        console.log(err);

      }

    })


  }
}
