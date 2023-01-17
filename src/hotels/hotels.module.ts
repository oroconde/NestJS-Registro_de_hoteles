import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelsController } from './hotels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelsEntity } from './entities/hotel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HotelsEntity], 'id_db')],
  controllers: [HotelsController],
  providers: [HotelsService]
})
export class HotelsModule { }
