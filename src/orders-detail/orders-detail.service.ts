import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrdersHeaderService } from 'src/orders-header/orders-header.service';

@Injectable()
export class OrdersDetailService {
  constructor(
    private prisma: PrismaService,
    private orderHeaderService: OrdersHeaderService,
  ) {}

  async getCartDetails(clienteId: number) {
    const cart = await this.orderHeaderService.getOrCreateCart(clienteId);
    return this.prisma.pedidoDet.findMany({
      where: { pedidoId: cart.id },
      include: { producto: true },
    });
  }

  async addToCart(clienteId: number, productoId: number, cantidad: number) {
    const cart = await this.orderHeaderService.getOrCreateCart(clienteId);

    const existing = await this.prisma.pedidoDet.findFirst({
      where: { pedidoId: cart.id, productoId: productoId },
    });

    if (existing) {
      await this.prisma.stocks.updateMany({
        where: { productoId: productoId },
        data: { stockComprometido: { increment: cantidad } },
      });

      return this.prisma.pedidoDet.update({
        where: { id: existing.id },
        data: { cantidad: existing.cantidad + cantidad },
      });
    }

    await this.prisma.stocks.updateMany({
      where: { productoId: productoId },
      data: { stockComprometido: { increment: cantidad } },
    });

    return this.prisma.pedidoDet.create({
      data: {
        pedidoId: cart.id,
        productoId: productoId,
        estado: 'A',
        cantidad,
        valorUnitario: 0,
        tasaImpuesto: 0,
        precioUnitario: 0,
        precioTotal: 0,
      },
    });
  }

  async updateCartItem(
    clienteId: number,
    productoId: number,
    nuevaCantidad: number,
  ) {
    const cart = await this.orderHeaderService.getOrCreateCart(clienteId);
    const item = await this.prisma.pedidoDet.findFirst({
      where: { pedidoId: cart.id, productoId: productoId },
    });

    if (!item) {
      throw new Error('Item not found in cart');
    }

    const diferencia = nuevaCantidad - item.cantidad;

    await this.prisma.stocks.updateMany({
      where: { productoId: productoId },
      data: { stockComprometido: { increment: diferencia } },
    });

    return this.prisma.pedidoDet.update({
      where: { id: item.id },
      data: { cantidad: nuevaCantidad },
    });
  }

  async removeFromCart(clienteId: number, productoId: number) {
    const cart = await this.orderHeaderService.getOrCreateCart(clienteId);
    const item = await this.prisma.pedidoDet.findFirst({
      where: { pedidoId: cart.id, productoId: productoId },
    });

    if (!item) return;

    await this.prisma.stocks.updateMany({
      where: { productoId: productoId },
      data: { stockComprometido: { decrement: item.cantidad } },
    });

    return this.prisma.pedidoDet.delete({ where: { id: item.id } });
  }
}
