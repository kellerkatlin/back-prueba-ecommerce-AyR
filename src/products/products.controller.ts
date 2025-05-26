import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { SearchProductsDto } from './dto/search-product.dto';
import { CreateStockItemDto } from './dto/create-stock.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Get('search')
  async searchProducts(@Query() query: SearchProductsDto) {
    return this.productsService.searchProducts(query.search);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id/toggle-status')
  toggleEstado(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.toggleEstado(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

  @Put('update-prices')
  updatePricesBatch(@Body() updates: { id: number; nuevoPrecio: number }[]) {
    return this.productsService.updatePricesBatch(updates);
  }

  @Post('add-stock')
  async createBatch(@Body() data: CreateStockItemDto[]) {
    return this.productsService.createStockBatch(data);
  }
}
