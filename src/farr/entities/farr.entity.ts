import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Farr {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
