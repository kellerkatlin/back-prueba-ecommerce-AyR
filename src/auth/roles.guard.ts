import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { UserRole } from './auth.types';

interface RequestWithUser {
  user?: {
    role?: UserRole;
  };
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndMerge<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!Array.isArray(roles) || roles.length === 0) return true;

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const userRole = request.user?.role;

    const role = userRole as UserRole;
    return roles.includes(role);
  }
}
