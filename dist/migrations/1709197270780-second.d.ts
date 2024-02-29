import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Second1709197270780 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
