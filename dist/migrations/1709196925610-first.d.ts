import { MigrationInterface, QueryRunner } from "typeorm";
export declare class First1709196925610 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
