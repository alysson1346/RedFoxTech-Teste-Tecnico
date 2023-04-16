export interface IPokemonCreate {
  name: string;
  pokedex_number: number;
  img_name: string;
  generation: number;
  evolved: boolean;
  family_id: number;
  cross_gen: boolean;
  type_1: string;
  type_2: string;
  weather_1: string;
  Weather_2: string;
  stat_total: number;
  atk: number;
  def: number;
  sta: number;
  legendary: boolean;
  aquireable: boolean;
  spawns: boolean;
  regional: boolean;
  raidable: boolean;
  hatchable: boolean;
  shiny: boolean;
  nest: boolean;
  newPokemon: boolean;
  not_gettable: boolean;
  future_evolve: boolean;
  cp40: number;
  cp39: number;
}

export interface IPokemonUpdate {
  name?: string;
  pokedex_number?: number;
  img_name?: string;
  generation?: number;
  evolved?: boolean;
  family_id?: number;
  cross_gen?: boolean;
  type_1?: string;
  type_2?: string;
  weather_1?: string;
  Weather_2?: string;
  stat_total?: number;
  atk?: number;
  def?: number;
  sta?: number;
  legendary?: boolean;
  aquireable?: boolean;
  spawns?: boolean;
  regional?: boolean;
  raidable?: boolean;
  hatchable?: boolean;
  shiny?: boolean;
  nest?: boolean;
  newPokemon?: boolean;
  not_gettable?: boolean;
  future_evolve?: boolean;
  cP40?: number;
  cP39?: number;
}
