import { Controller, Get, Post, Delete, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Request } from 'express';
import { AuthPayload } from 'src/auth/jwt.strategy';
import { OrdersHeaderService } from './orders-header.service';

@Controller('cart')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CLIENT')
export class OrdersHeaderController {
  constructor(private readonly orderHeaderService: OrdersHeaderService) {}

  @Get()
  getCart(@Req() req: Request) {
    const clienteId = +(req.user as AuthPayload).userId;
    return this.orderHeaderService.getOrCreateCart(clienteId);
  }

  @Delete('clear')
  clearCart(@Req() req: Request) {
    const clienteId = +(req.user as AuthPayload).userId;
    return this.orderHeaderService.clearCart(clienteId);
  }

  @Post('checkout')
  finalizeCart(@Req() req: Request) {
    const clienteId = +(req.user as AuthPayload).userId;
    return this.orderHeaderService.finalizeCart(clienteId);
  }
}
