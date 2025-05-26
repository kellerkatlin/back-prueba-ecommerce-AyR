import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateStockItemDto } from './dto/create-stock.dto';
import { Stocks } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateProductDto) {
    return this.prisma.producto.create({
      data: {
        ...dto,
        estado: 'A',
      },
    });
  }

  findAll() {
    return this.prisma.producto.findMany({
      include: { categoria: true, stock: true },
      orderBy: { descripcion: 'asc' },
    });
  }

  async searchProducts(search?: string) {
    if (!search) {
      return [];
    }

    const parsedPrice = +search;
    const isNumber = !isNaN(parsedPrice);

    const results = await this.prisma.producto.findMany({
      where: {
        OR: [
          { codigo: { contains: search, mode: 'insensitive' } },
          { descripcion: { contains: search, mode: 'insensitive' } },
          ...(isNumber
            ? [
                {
                  precioVenta: {
                    gte: parsedPrice - 0.01,
                    lte: parsedPrice + 999,
                  },
                },
              ]
            : []),
        ],
      },
      include: { categoria: true },
      take: 10,
    });

    if (isNumber) {
      return results.filter((p) => p.precioVenta.toString().includes(search));
    }

    return results;
  }
  async toggleEstado(id: number) {
    const producto = await this.prisma.producto.findUnique({ where: { id } });

    const nuevoEstado = producto?.estado === 'A' ? 'I' : 'A';

    return this.prisma.producto.update({
      where: { id },
      data: { estado: nuevoEstado },
    });
  }

  findOne(id: number) {
    return this.prisma.producto.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateProductDto) {
    return this.prisma.producto.update({
      where: { id },
      data: dto,
    });
  }
  async createStockBatch(data: CreateStockItemDto[]): Promise<Stocks[]> {
    const created: Stocks[] = [];

    for (const item of data) {
      const stock = await this.prisma.stocks.upsert({
        where: { productoId: item.productoId },
        update: {
          stockFisico: {
            increment: item.cantidad,
          },
        },
        create: {
          productoId: item.productoId,
          stockFisico: item.cantidad,
          stockComprometido: 0,
        },
      });

      created.push(stock);
    }

    return created;
  }

  remove(id: number) {
    // Baja lógica
    return this.prisma.producto.update({
      where: { id },
      data: { estado: 'I' },
    });
  }

  async updatePricesBatch(data: { id: number; nuevoPrecio: number }[]) {
    const updates = data.map(({ id, nuevoPrecio }) =>
      this.prisma.producto.update({
        where: { id },
        data: { precioVenta: nuevoPrecio },
      }),
    );

    return this.prisma.$transaction(updates);
  }
}
