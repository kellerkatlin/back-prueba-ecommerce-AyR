import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCompanyDto) {
    return this.prisma.empresa.create({ data: dto });
  }

  findAll() {
    return this.prisma.empresa.findMany({ where: { estado: 'A' } });
  }

  findOne(id: number) {
    return this.prisma.empresa.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateCompanyDto) {
    return this.prisma.empresa.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.empresa.update({ where: { id }, data: { estado: 'I' } });
  }
}
