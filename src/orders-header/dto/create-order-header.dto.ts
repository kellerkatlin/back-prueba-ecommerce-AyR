import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateOrderHeaderDto {
  @IsString()
  tipo: string; // PM o PW

  @IsString()
  numero: string;

  @IsNumber()
  clienteId: number;

  @IsDateString()
  fecha: string;

  @IsString()
  direccionEntrega: string;
}
