"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.First1709196925610 = void 0;
class First1709196925610 {
    constructor() {
        this.name = 'First1709196925610';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`description\` varchar(20) NOT NULL, \`year\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`task\``);
    }
}
exports.First1709196925610 = First1709196925610;
//# sourceMappingURL=1709196925610-first.js.map