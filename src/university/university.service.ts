import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University } from './models/university.model';

@Injectable()
export class UniversityService {
  constructor(
    @InjectModel('University')
    private readonly universityModel: Model<University>,
  ) {}

  create(createUniversityDto: CreateUniversityDto) {
    const university = new this.universityModel(createUniversityDto);
    return university.save();
  }

  findAll() {
    return this.universityModel.find();
  }

  findOne(id: string) {
    const resilt = this.universityModel.findOne({ _id: id });
    return resilt;
  }

  async update(id: string, updateUniversityDto: UpdateUniversityDto) {
    return this.universityModel.updateOne({ _id: id }, updateUniversityDto);
  }

  remove(id: string) {
    return this.universityModel.deleteOne({ _id: id });
  }
}
