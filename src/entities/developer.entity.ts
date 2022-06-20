import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Developer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column('simple-array')
  skillsets: string[];

  @Column()
  hobby: string;
}