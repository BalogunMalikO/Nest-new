import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trivia {
@PrimaryGeneratedColumn()
id: number;

@Column('text')
question: string;

@Column('text')
answer: string;
}
