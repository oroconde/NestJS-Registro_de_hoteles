import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelsEntity } from './hotels/entities/hotel.entity';

@Module({
  imports: [
    HotelsModule,
    TypeOrmModule.forRoot({
      name: 'id_db',
      type: 'mysql',
      host: '127.0.0.1',
      port: 3303,
      username: 'Bryan',
      password: '1234',
      database: 'hotels_db',
      synchronize: false,
      entities: [HotelsEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
