"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Second1709197270780 = void 0;
class Second1709197270780 {
    constructor() {
        this.name = 'Second1709197270780';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`nawress\` varchar(100) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`nawress\``);
    }
}
exports.Second1709197270780 = Second1709197270780;
//# sourceMappingURL=1709197270780-second.js.map