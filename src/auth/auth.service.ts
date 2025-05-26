import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateAdmin(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user || user.estado !== 'A')
      throw new UnauthorizedException('Invalid user');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: user.id, username: user.username, role: user.rol };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async meAdmin(username: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user) throw new UnauthorizedException('Invalid user');
    return {
      id: user.id,
      username: user.username,
      role: user.rol,
    };
  }
  async meClient(email: string) {
    const client = await this.usersService.findClientByEmail(email);
    if (!client) throw new UnauthorizedException('Invalid user');
    return {
      id: client.id,
      nombres: client.nombres,
      email: client.email,
      role: 'CLIENT',
    };
  }

  async validateClient(email: string, password: string) {
    const client = await this.usersService.findClientByEmail(email);
    if (!client || client.estado !== 'A')
      throw new UnauthorizedException('Invalid user');

    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    const payload = { sub: client.id, email: client.email, role: 'CLIENT' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerAdmin(username: string, password: string) {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.createAdmin({
      username,
      password: hash,
    });
    return {
      id: newUser.id,
      username: newUser.username,
    };
  }

  async registerClient(data: {
    nombres: string;

    email: string;
    password: string;
  }) {
    const exists = await this.usersService.findClientByEmail(data.email);
    if (exists) throw new Error('Email ya registrado');

    const hash = await bcrypt.hash(data.password, 10);

    const newClient = await this.usersService.createClient({
      nombres: data.nombres,
      email: data.email,
      password: hash,
      apePaterno: '',
      apeMaterno: '',
      celular: '',
      direccion: '',
      codPostal: '',
    });
    const payload = {
      sub: newClient.id,
      email: newClient.email,
      role: 'CLIENT',
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: newClient.id,
        nombres: newClient.nombres,
        email: newClient.email,
        role: 'CLIENT',
      },
    };
  }
}
