import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',component:LandingComponent},
    {path:'home',canActivate:[authGuard],component:HomeComponent},
    {path:'employee',canActivate:[authGuard],loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule)}
];
