import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  codigo: string;

  @IsString()
  tipo: 'C' | 'S';

  @IsString()
  descripcion: string;

  @IsOptional()
  @IsString()
  imagenUrl?: string;

  @IsOptional()
  @IsNumber()
  categoriaPadreId?: number;

  @IsString()
  estado: 'A' | 'I';
}
