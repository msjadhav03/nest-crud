import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
