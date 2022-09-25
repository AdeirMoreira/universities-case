import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
} from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { idParam } from './dto/idParam.dto';
import { queryParams } from './dto/queryParams.dto';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Universidades')
@Controller('universities')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'A Universidade foi criado com sucesso.',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'Alguma propiedade do corpo da requisição não está correta',
  })
  @Post()
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'A busca por todas as universidades foi um sucesso.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Não há nenhuma universidade cadastrada.',
  })
  @Get()
  findAll() {
    return this.universityService.findAll();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description:
      'A busca por todas as universidades de um país por página foi um sucesso.',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'As querys country ou page não estão corretas',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Não há nenhuma universidade cadastrada.',
  })
  @ApiQuery({
    name: 'country',
    required: true,
    description: 'Informa o país das universidades a serem buscadas',
    example: 'Brazil',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: 'Informa a página buscada',
    example: '1',
  })
  @Get('s')
  find(@Query() query: queryParams) {
    return this.universityService.find(query.country, query.page);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description:
      'A busca por uma universidade por meio de seu id foi um sucesso.',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'O Parametro id não está correto.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Não há nenhuma universidade cadastrada com o id informado',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: `Id da universidade - (Você deve pegar o id da universidade retornado 
      quando a criou no endpoint de criação, ou pegar um existente, caso o banco de dados esteja populado)`,
    example: `632f3c26d764db069af0b5f4`,
  })
  @Get(':id')
  findOne(@Param() param: idParam) {
    return this.universityService.findOne(param.id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'A edição da universidade foi um sucesso.',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description:
      'O paramentro id ou alguma propiedade do corpo da requisição não está correto',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Não há nenhuma universidade cadastrada com o id informado',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: `Id da universidade - (Você deve pegar o id da universidade retornado 
      quando a criou no endpoint de criação, ou pegar um existente, caso o banco de dados esteja populado)`,
    example: `632f3c26d764db069af0b5f4`,
  })
  @Patch(':id')
  update(
    @Param() param: idParam,
    @Body() updateUniversityDto: UpdateUniversityDto,
  ) {
    return this.universityService.update(param.id, updateUniversityDto);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'O remoção registro da universidade foi um sucesso.',
  })
  @ApiResponse({
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    description: 'O Parametro id não está correto.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Não há nenhuma universidade cadastrada com o id informado',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: `Id da universidade - (Você deve pegar o id da universidade retornado 
      quando a criou no endpoint de criação, ou pegar um existente, caso o banco de dados esteja populado)`,
    example: `632f3c26d764db069af0b5f4`,
  })
  @Delete(':id')
  remove(@Param() param: idParam) {
    return this.universityService.remove(param.id);
  }
}
