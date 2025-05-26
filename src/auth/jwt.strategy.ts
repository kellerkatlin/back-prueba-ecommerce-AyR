import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { UserRole } from './auth.types';

interface JwtPayload {
  sub: number;
  username?: string;
  email: string;
  role: UserRole;
}
export interface AuthPayload {
  userId: number;
  username?: string;
  email: string;
  role: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  validate(payload: JwtPayload): AuthPayload {
    return {
      userId: payload.sub,
      username: payload.username,
      email: payload.email,
      role: payload.role,
    };
  }
}
