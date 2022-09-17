import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import { CreateUniversityDto } from 'src/university/dto/create-university.dto';
import { University } from 'src/university/models/university.model';
import { CreateDatabaseDto } from './dto/create-database.dto';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel('University')
    private readonly universityModel: Model<University>,
  ) {}

  private countrys = [
    'Argentina',
    'Brazil',
    'Chile',
    'Colombia',
    'Paraguay',
    'Peru',
    'Suriname',
    'Uruguay',
  ];

  async create() {
    const promisesArray = this.countrys.map((country: string) => {
      return this.createbyCountryName(country);
    });

    return Promise.all(promisesArray);
  }

  private async createbyCountryName(country: string) {
    const result = await axios.get(
      `http://universities.hipolabs.com/search?country=${country}`,
    );
    const promisesArray = result.data.map((e: CreateDatabaseDto) => {
      const newUniversity: CreateUniversityDto = {
        domains: e['domains'],
        alpha_two_code: e['alpha_two_code'],
        country: e['country'],
        name: e['name'],
        web_pages: e['web_pages'],
        'state-province': e['state-province'],
      };
      const university = new this.universityModel(newUniversity);
      return university.save();
    });
    const resultDB = await Promise.all(promisesArray);
    return resultDB;
  }

  async remove() {
    const promisesArray = this.countrys.map((country: string) => {
      return this.universityModel.deleteMany({ country });
    });

    return Promise.all(promisesArray);
  }
}
