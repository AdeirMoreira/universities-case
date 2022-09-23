import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { idParam } from './dto/idParam.dto';
import { queryParams } from './dto/queryParams.dto';

@Controller('universities')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Post()
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  }

  @Get()
  findAll() {
    return this.universityService.findAll();
  }

  @Get('s')
  find(@Query() query: queryParams) {
    return this.universityService.find(query.country, query.page);
  }

  @Get(':id')
  findOne(@Param() param: idParam) {
    return this.universityService.findOne(param.id);
  }

  @Patch(':id')
  update(
    @Param() param: idParam,
    @Body() updateUniversityDto: UpdateUniversityDto,
  ) {
    return this.universityService.update(param.id, updateUniversityDto);
  }

  @Delete(':id')
  remove(@Param() param: idParam) {
    return this.universityService.remove(param.id);
  }
}
