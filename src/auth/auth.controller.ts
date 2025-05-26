import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { AuthPayload } from './jwt.strategy';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-admin')
  async loginAdmin(@Body() body: { username: string; password: string }) {
    return this.authService.validateAdmin(body.username, body.password);
  }

  @Post('login-client')
  async loginClient(@Body() body: { email: string; password: string }) {
    return this.authService.validateClient(body.email, body.password);
  }

  @Get('me-admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  meAdmin(@Req() req: Request) {
    const user = req.user as AuthPayload;
    const username = user.username;
    if (!username) {
      throw new Error('Username not found in request payload');
    }
    return this.authService.meAdmin(username);
  }

  @Get('me-client')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('CLIENT')
  meClient(@Req() req: Request) {
    const user = req.user as AuthPayload;
    const email = user.email;
    if (!email) {
      throw new Error('Email not found in request payload');
    }
    return this.authService.meClient(email);
  }

  @Post('register-admin')
  async registerAdmin(@Body() body: { username: string; password: string }) {
    return this.authService.registerAdmin(body.username, body.password);
  }

  @Post('register-client')
  async registerClient(
    @Body()
    body: {
      nombres: string;
      email: string;
      password: string;
    },
  ) {
    return this.authService.registerClient(body);
  }
}
