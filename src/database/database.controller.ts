import { Controller, Post, Delete } from '@nestjs/common';
import { DatabaseService } from './database.service';

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
