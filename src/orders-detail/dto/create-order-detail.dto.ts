import { IsNumber } from 'class-validator';

export class CreateOrderDetailDto {
  @IsNumber()
  pedidoId: number;

  @IsNumber()
  productoId: number;

  @IsNumber()
  cantidad: number;

  @IsNumber()
  valorUnitario: number;

  @IsNumber()
  tasaImpuesto: number;

  @IsNumber()
  precioUnitario: number;

  @IsNumber()
  precioTotal: number;
}
