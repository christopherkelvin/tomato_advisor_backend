import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'User' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
    length: 255,
  })
  firstname: string;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
    length: 255,
  })
  lastname: string;

  @Column({
    nullable: false,
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  password: string;

  @Column({
    nullable: false,
    unique: true,
  })
  phonenumber: string;

  @Column({ default: true, nullable: true })
  isActive: boolean;
}
