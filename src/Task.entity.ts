import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
  })
  description: string;

  @Column({
    length: 100,
  })
  nawress: string;

  @Column({
    type: 'int',
  })
  year: number;
}
