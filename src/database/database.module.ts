import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitySchema } from 'src/university/schemas/university.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'University',
        schema: UniversitySchema,
      },
    ]),
  ],
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {}
