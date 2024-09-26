import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {

  constructor(private router:Router){}

  logout(){
    this.router.navigateByUrl('/')
    sessionStorage.clear()
  }
}
