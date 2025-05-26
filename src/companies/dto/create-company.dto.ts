import { IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  ruc: string;

  @IsString()
  razonSocial: string;

  @IsString()
  direccion: string;

  @IsString()
  codUbigeo: string;

  @IsString()
  estado: 'A' | 'I';
}
