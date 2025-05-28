import { Column, PrimaryGeneratedColumn } from "typeorm";

export class historyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: false,
    length: 255,
  })
  time: string;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: false,
    length: 255,
  })
  date: string;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: false,
    length: 255,
  })
  location: string;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: false,
    length: 255,
  })
  disease: string;
  
  @Column({
    type: 'enum',
    enum: ['Umetibiwa', 'Haujatibiwa', ''],
    default: '',
  })
  treatementStatus: string;
}