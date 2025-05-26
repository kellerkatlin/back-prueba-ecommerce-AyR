import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  codigo: string;

  @IsString()
  descripcion: string;

  @IsString()
  unidadVenta: string;

  @IsNumber()
  categoriaId: number;

  @IsString()
  contenidoUnidad: string;

  @IsOptional()
  @IsString()
  infoAdicional?: string;

  @IsOptional()
  @IsString()
  fotoUrl?: string;

  @IsString()
  moneda: string;

  @IsNumber()
  tasaImpuesto: number;

  @IsNumber()
  precioVenta: number;

  @IsString()
  estado: string;
}
