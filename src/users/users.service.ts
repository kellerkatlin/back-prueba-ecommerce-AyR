import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findByUsername(username: string) {
    return this.prisma.usuario.findUnique({ where: { username } });
  }

  createAdmin(data: { username: string; password: string; rol?: string }) {
    return this.prisma.usuario.create({
      data: {
        ...data,
        rol: data.rol ?? 'ADMIN',
        estado: 'A',
      },
    });
  }
  findClientByEmail(email: string) {
    return this.prisma.cliente.findUnique({ where: { email } });
  }

  createClient(data: {
    nombres: string;
    apePaterno: string;
    apeMaterno: string;
    celular: string;
    email: string;
    password: string;
    direccion: string;
    codPostal: string;
  }) {
    return this.prisma.cliente.create({
      data: {
        ...data,
        estado: 'A',
      },
    });
  }
}
