import { inject } from '@angular/core';
import { Router } from '@angular/router';
// import { SiteUsersService } from '../services/site-users.service';
// import { map, catchError, of } from 'rxjs';

export const authGuard = () => {
  const router = inject(Router);
  // const authService = inject(SiteUsersService);

  const currentUser = localStorage.getItem('authed');

  if (currentUser == 'false') {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
