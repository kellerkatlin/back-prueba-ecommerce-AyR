import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCategoryDto) {
    return this.prisma.categoria.create({
      data: {
        ...dto,
        estado: 'A',
      },
    });
  }

  findAll() {
    return this.prisma.categoria.findMany({
      include: {
        subcategorias: true,
        categoriaPadre: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.categoria.findUnique({
      where: { id },
      include: {
        subcategorias: true,
        categoriaPadre: true,
      },
    });
  }
  async toggleEstado(id: number) {
    const category = await this.prisma.categoria.findUnique({ where: { id } });

    const nuevoEstado = category?.estado === 'A' ? 'I' : 'A';

    return this.prisma.categoria.update({
      where: { id },
      data: { estado: nuevoEstado },
    });
  }
  async searchCategory(search?: string) {
    if (!search) {
      return [];
    }

    return await this.prisma.categoria.findMany({
      where: {
        OR: [
          { codigo: { contains: search, mode: 'insensitive' } },
          { descripcion: { contains: search, mode: 'insensitive' } },
          {
            categoriaPadre: {
              descripcion: { contains: search, mode: 'insensitive' },
            },
          },
        ],
      },
      include: { subcategorias: true },
      take: 10,
    });
  }

  update(id: number, dto: UpdateCategoryDto) {
    return this.prisma.categoria.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    // Baja lógica
    return this.prisma.categoria.update({
      where: { id },
      data: { estado: 'I' },
    });
  }
}
