import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);

  const currentUser = 1;

  if (!currentUser) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
