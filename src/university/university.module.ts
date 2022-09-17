import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitySchema } from './schemas/university.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'University',
        schema: UniversitySchema,
      },
    ]),
  ],
  controllers: [UniversityController],
  providers: [UniversityService],
})
export class UniversityModule {}
