import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversityModule } from './university/university.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    UniversityModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
