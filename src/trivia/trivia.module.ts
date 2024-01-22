import { Module } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { TriviaController } from './trivia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trivia } from './entities/trivia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trivia])],
  controllers: [TriviaController],
  providers: [TriviaService],
})
export class TriviaModule {}
