import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClientDto } from './dto/client-create.dto';
import { UpdateCategoryDto } from 'src/categories/dto/update-category.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateClientDto) {
    return this.prisma.cliente.create({ data: dto });
  }

  findAll() {
    return this.prisma.cliente.findMany({
      where: { estado: 'A' },
    });
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateCategoryDto) {
    return this.prisma.cliente.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.cliente.update({
      where: { id },
      data: { estado: 'I' },
    });
  }
}
