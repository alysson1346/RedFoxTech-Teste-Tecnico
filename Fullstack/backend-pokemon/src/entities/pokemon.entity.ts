import { Entity, Column, PrimaryColumn, BeforeInsert } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Pokemon {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  pokedex_number: number;

  @Column()
  img_name: string;

  @Column()
  generation: number;

  @Column()
  evolved: boolean;

  @Column()
  family_id: number;

  @Column()
  cross_gen: boolean;

  @Column()
  type_1: string;

  @Column()
  type_2: string;

  @Column()
  weather_1: string;

  @Column()
  Weather_2: string;

  @Column()
  stat_total: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  sta: number;

  @Column()
  legendary: boolean;

  @Column()
  aquireable: boolean;

  @Column()
  spawns: boolean;

  @Column()
  regional: boolean;

  @Column()
  raidable: boolean;

  @Column()
  hatchable: boolean;

  @Column()
  shiny: boolean;

  @Column()
  nest: boolean;

  @Column()
  new: boolean;

  @Column()
  not_gettable: boolean;

  @Column()
  future_evolve: boolean;

  @Column()
  cp40: number;

  @Column()
  cp39: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
