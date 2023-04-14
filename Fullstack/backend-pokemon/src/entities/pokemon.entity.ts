import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Pokemon {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  pokedexNumber: number;

  @Column()
  generation: number;

  @Column()
  evolved: boolean;

  @Column()
  familyID: number;

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
  "100% CP @ 40": number;

  @Column()
  "100% CP @ 39": number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    this.pokedexNumber = 0;
    this.pokedexNumber++;
  }
}
