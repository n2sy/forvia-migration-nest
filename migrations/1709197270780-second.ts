import { MigrationInterface, QueryRunner } from "typeorm";

export class Second1709197270780 implements MigrationInterface {
    name = 'Second1709197270780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`nawress\` varchar(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`nawress\``);
    }

}
