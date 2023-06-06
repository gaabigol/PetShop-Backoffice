import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SecurityUtil } from '../utils/security';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = SecurityUtil.get();
    if (!user || !user.token) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
