import { IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  nombres: string;

  @IsString()
  apePaterno: string;

  @IsString()
  apeMaterno: string;

  @IsString()
  celular: string;

  @IsString()
  email: string;

  @IsString()
  direccion: string;

  @IsString()
  codPostal: string;

  @IsString()
  estado: 'A' | 'I';

  @IsString()
  password: string;
}
