import { Controller, Post, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DatabaseService } from './database.service';

@ApiTags('Banco de dados')
@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post()
  create() {
    return this.databaseService.create();
  }

  @Delete()
  remove() {
    return this.databaseService.remove();
  }
}
