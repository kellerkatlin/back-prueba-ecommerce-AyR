import { Module } from '@nestjs/common';
import { OrdersHeaderService } from './orders-header.service';
import { OrdersHeaderController } from './orders-header.controller';

@Module({
  providers: [OrdersHeaderService],
  exports: [OrdersHeaderService],
  controllers: [OrdersHeaderController],
})
export class OrdersHeaderModule {}
