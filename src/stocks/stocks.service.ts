import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StocksService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateStockDto) {
    return this.prisma.stocks.create({ data: dto });
  }

  findAll() {
    return this.prisma.stocks.findMany({
      include: {
        producto: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.stocks.findUnique({
      where: { id },
      include: { producto: true },
    });
  }

  update(id: number, dto: UpdateStockDto) {
    return this.prisma.stocks.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.stocks.delete({ where: { id } });
  }
}
