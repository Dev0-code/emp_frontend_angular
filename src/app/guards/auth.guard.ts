import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {

  const admin=inject(AdminService)
  const router=inject(Router)
  const toastr=inject(ToastrService)

  if(admin.isLoggedIn()){
    return true;
  }else{
    toastr.warning("Operation Not Allowed!!...Please Login!!!")
    router.navigateByUrl('/')
    return false;
  }
};
