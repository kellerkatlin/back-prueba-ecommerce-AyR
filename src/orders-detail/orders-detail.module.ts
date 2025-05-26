import { Module } from '@nestjs/common';
import { OrdersDetailService } from './orders-detail.service';
import { OrdersDetailController } from './orders-detail.controller';
import { OrdersHeaderModule } from 'src/orders-header/orders-header.module';

@Module({
  providers: [OrdersDetailService],
  controllers: [OrdersDetailController],
  imports: [OrdersHeaderModule],
})
export class OrdersDetailModule {}
