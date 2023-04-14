import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1681435653751 implements MigrationInterface {
    name = 'CreateTables1681435653751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" uuid NOT NULL, "name" character varying NOT NULL, "pokedexNumber" integer NOT NULL, "generation" integer NOT NULL, "evolved" boolean NOT NULL, "familyID" integer NOT NULL, "family_id" integer NOT NULL, "cross_gen" boolean NOT NULL, "type_1" character varying NOT NULL, "type_2" character varying NOT NULL, "weather_1" character varying NOT NULL, "Weather_2" character varying NOT NULL, "stat_total" integer NOT NULL, "atk" integer NOT NULL, "def" integer NOT NULL, "sta" integer NOT NULL, "legendary" boolean NOT NULL, "aquireable" boolean NOT NULL, "spawns" boolean NOT NULL, "regional" boolean NOT NULL, "raidable" boolean NOT NULL, "hatchable" boolean NOT NULL, "shiny" boolean NOT NULL, "nest" boolean NOT NULL, "new" boolean NOT NULL, "not_gettable" boolean NOT NULL, "future_evolve" boolean NOT NULL, "100% CP @ 40" integer NOT NULL, "100% CP @ 39" integer NOT NULL, CONSTRAINT "UQ_862c0e0b7eaf2c4d53f74699079" UNIQUE ("pokedexNumber"), CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
