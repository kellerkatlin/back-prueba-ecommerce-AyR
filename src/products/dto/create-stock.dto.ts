// src/stocks/dto/create-stock-batch.dto.ts
import { IsInt, Min } from 'class-validator';

export class CreateStockItemDto {
  @IsInt()
  productoId: number;

  @IsInt()
  @Min(1)
  cantidad: number;
}
