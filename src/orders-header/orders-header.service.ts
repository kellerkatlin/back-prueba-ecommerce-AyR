import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersHeaderService {
  constructor(private prisma: PrismaService) {}

  async getOrCreateCart(clienteId: number) {
    const existing = await this.prisma.pedidoCab.findFirst({
      where: {
        clienteId: clienteId,
        tipo: 'PM',
        estado: 'B',
      },
    });

    if (existing) return existing;

    return this.prisma.pedidoCab.create({
      data: {
        clienteId: clienteId,
        tipo: 'PM',
        estado: 'B',
        fecha: new Date(),
        numero: `PC-${Date.now()}`, // or another logic for 'numero'
        direccionEntrega: '', // or provide a default/empty address
      },
    });
  }

  async finalizeCart(clienteId: number) {
    const cart = await this.getOrCreateCart(clienteId);

    const detalles = await this.prisma.pedidoDet.findMany({
      where: { pedidoId: cart.id },
      include: { producto: true },
    });

    for (const item of detalles) {
      await this.prisma.movimientoInventario.create({
        data: {
          tipo: 'VENTA',
          numero: `MV-${Date.now()}`,
          fecha: new Date(),
          signo: '-',
          productoId: item.productoId,
          unidadVenta: item.producto.unidadVenta,
          cantidad: item.cantidad,
          estado: 'A',
        },
      });

      await this.prisma.stocks.updateMany({
        where: { productoId: item.productoId },
        data: {
          stockFisico: { decrement: item.cantidad },
          stockComprometido: { decrement: item.cantidad },
        },
      });
    }

    await this.prisma.pedidoCab.update({
      where: { id: cart.id },
      data: { estado: 'A' },
    });

    return this.getOrCreateCart(clienteId); // nuevo carrito vacío
  }

  async clearCart(clienteId: number) {
    const cart = await this.getOrCreateCart(clienteId);

    const detalles = await this.prisma.pedidoDet.findMany({
      where: { pedidoId: cart.id },
    });

    for (const item of detalles) {
      await this.prisma.stocks.updateMany({
        where: { productoId: item.productoId },
        data: { stockComprometido: { decrement: item.cantidad } },
      });
    }

    await this.prisma.pedidoDet.deleteMany({
      where: { pedidoId: cart.id },
    });

    return { message: 'Carrito vaciado' };
  }
}
