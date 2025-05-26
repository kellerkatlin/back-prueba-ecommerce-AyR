import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ClientsModule } from './clients/clients.module';
import { CompaniesModule } from './companies/companies.module';
import { StocksModule } from './stocks/stocks.module';
import { InventoryMovementsModule } from './inventory-movements/inventory-movements.module';
import { OrdersHeaderModule } from './orders-header/orders-header.module';
import { OrdersDetailModule } from './orders-detail/orders-detail.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    PrismaModule,
    ProductsModule,
    CategoriesModule,
    ClientsModule,
    CompaniesModule,
    StocksModule,
    InventoryMovementsModule,
    OrdersHeaderModule,
    OrdersDetailModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
