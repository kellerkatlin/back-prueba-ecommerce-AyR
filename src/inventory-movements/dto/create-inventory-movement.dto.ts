import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateInventoryMovementDto {
  @IsString()
  tipo: string; // Ej: CM, DC

  @IsString()
  numero: string;

  @IsDateString()
  fecha: string;

  @IsString()
  signo: '+' | '-';

  @IsNumber()
  productoId: number;

  @IsString()
  unidadVenta: string;

  @IsNumber()
  cantidad: number;

  @IsString()
  estado: 'A' | 'I';
}
