import { inject, runInInjectionContext } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getAuthLevel().pipe(
    map((response) => {
      if (!response) {
        router.navigate(['cuadrante']);
      }
      return response;
    })
  );
};
