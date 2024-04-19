import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Cat } from './schema/cat.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class CatService {
  constructor(
    // @InjectConnection() private connection: Connection,
    @InjectModel(Cat.name) private catModel: Model<Cat>,
  ) {}

  create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  findAll() {
    return `This action returns all cat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
