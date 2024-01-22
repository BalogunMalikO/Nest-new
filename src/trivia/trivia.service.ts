import { Injectable } from '@nestjs/common';
import { CreateTriviaDto } from './dto/create-trivia.dto';
import { UpdateTriviaDto } from './dto/update-trivia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Trivia } from './entities/trivia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TriviaService {
  constructor(
    @InjectRepository(Trivia)
    private TriviaRepository: Repository<Trivia>,
  ) {}
  async create(createTriviaDto: CreateTriviaDto) {
    return await this.TriviaRepository.save(createTriviaDto);
  }

  async findAll() {
    return await this.TriviaRepository.find();
  }

  async findOne(id: number) {
    return await this.TriviaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTriviaDto: UpdateTriviaDto) {
    const toUpdate = await this.TriviaRepository.findOne({ where: { id } });

    const updated = Object.assign(toUpdate, UpdateTriviaDto);

    return await this.TriviaRepository.save(updated);
  }

  async remove(id: number) {
    return await this.TriviaRepository.delete(id);
  }
}
