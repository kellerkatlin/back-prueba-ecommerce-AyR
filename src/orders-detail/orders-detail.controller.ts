import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
  Put,
} from '@nestjs/common';
import { OrdersDetailService } from './orders-detail.service';
import { Roles } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthPayload } from 'src/auth/jwt.strategy';
import { Request } from 'express';
@Controller('cart/items')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CLIENT')
export class OrdersDetailController {
  constructor(private readonly ordersDetailService: OrdersDetailService) {}

  @Get()
  getCartDetails(@Req() req: Request) {
    const clienteId = +(req.user as AuthPayload).userId;
    return this.ordersDetailService.getCartDetails(clienteId);
  }

  @Post()
  addToCart(
    @Req() req: Request,
    @Body() body: { productoId: number; cantidad: number },
  ) {
    const clienteId = +(req.user as AuthPayload).userId;
    return this.ordersDetailService.addToCart(
      clienteId,
      body.productoId,
      body.cantidad,
    );
  }

  @Put(':productoId')
  updateItem(
    @Req() req: Request,
    @Param('productoId') productoId: string,
    @Body() body: { cantidad: number },
  ) {
    const clienteId = +(req.user as AuthPayload).userId;
    return this.ordersDetailService.updateCartItem(
      clienteId,
      +productoId,
      body.cantidad,
    );
  }

  @Delete(':productoId')
  removeItem(@Req() req: Request, @Param('productoId') productoId: string) {
    const clienteId = +(req.user as AuthPayload).userId;
    return this.ordersDetailService.removeFromCart(clienteId, +productoId);
  }
}
