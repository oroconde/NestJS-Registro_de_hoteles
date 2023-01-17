import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { HotelsEntity } from './entities/hotel.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(HotelsEntity, 'id_db')
    private readonly hotelsRepository: Repository<HotelsEntity>,
  ) {}

  async create(CreateHotelDto: CreateHotelDto) {
    await this.hotelsRepository.save(CreateHotelDto);
    return 'Okey';
  }

  async findAll() {
    return await this.hotelsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
