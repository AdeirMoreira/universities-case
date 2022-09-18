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

  private limit = 20;

  create(createUniversityDto: CreateUniversityDto) {
    const university = new this.universityModel(createUniversityDto);
    return university.save();
  }

  async findAll() {
    return this.refactor(
      await this.universityModel.find({}, 'name country state-province'),
    );
  }

  async find(country: string, page: number) {
    return this.refactor(
      await this.universityModel
        .find({ country }, 'name country state-province')
        .skip(page * this.limit)
        .limit(this.limit),
    );
  }

  async findOne(id: string) {
    const result = await this.universityModel.findOne(
      { _id: id },
      'name country state-province',
    );
    return this.refactor([result])[0];
  }

  async update(id: string, updateUniversityDto: UpdateUniversityDto) {
    return this.universityModel.updateOne({ _id: id }, updateUniversityDto);
  }

  remove(id: string) {
    return this.universityModel.deleteOne({ _id: id });
  }

  private refactor(universities: any) {
    return universities.map((university: any) => {
      return {
        id: university._id,
        nome: university.name,
        país: university.country,
        estado: university['state-province'],
      };
    });
  }
}
