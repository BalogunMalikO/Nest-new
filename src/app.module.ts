import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriviaModule } from './trivia/trivia.module';
import { Trivia } from './trivia/entities/trivia.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3360,
      username: 'root',
      password: '',
      database: 'restapi',
      entities: [Trivia],
      synchronize: true,
    }),
    TriviaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
