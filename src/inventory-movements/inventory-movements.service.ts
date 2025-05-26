import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInventoryMovementDto } from './dto/create-inventory-movement.dto';
import { UpdateInventoryMovementDto } from './dto/update-inventory-movement.dto';

@Injectable()
export class InventoryMovementsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateInventoryMovementDto) {
    return this.prisma.movimientoInventario.create({ data: dto });
  }

  findAll() {
    return this.prisma.movimientoInventario.findMany({
      include: {
        producto: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.movimientoInventario.findUnique({
      where: { id },
      include: { producto: true },
    });
  }

  update(id: number, dto: UpdateInventoryMovementDto) {
    return this.prisma.movimientoInventario.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.movimientoInventario.update({
      where: { id },
      data: { estado: 'I' },
    });
  }
}
