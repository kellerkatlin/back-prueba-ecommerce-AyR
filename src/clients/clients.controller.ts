import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateClientDto } from './dto/client-create.dto';
import { UpdateClientDto } from './dto/update-create.dto';
import { ClientsService } from './clients.service';

@Controller('clientes')
export class ClientsController {
  constructor(private readonly clientesService: ClientsService) {}

  @Post()
  create(@Body() dto: CreateClientDto) {
    return this.clientesService.create(dto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClientDto) {
    return this.clientesService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
