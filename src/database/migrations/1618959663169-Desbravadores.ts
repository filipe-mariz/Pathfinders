import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Desbravadores1618959663169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'desbravadores',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isNullable: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'name', 
            type: 'varchar',
            isNullable: false
          },

          {
            name: 'born',
            type: 'integer'
          },

          {
            name: 'unity',
            type: 'varchar',
            isNullable: false
          },

          {
            name: 'baptized',
            type: 'boolean'
          },

          {
            name: 'number',
            type: 'varchar',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('desbravadores');
    }

}
