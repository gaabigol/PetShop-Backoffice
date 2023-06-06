import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { SecurityUtil } from '../utils/security';

@Injectable()
export class ManagerGuard implements CanActivate {
  canActivate(): boolean {
    return SecurityUtil.isInRole('manager');
  }
}
