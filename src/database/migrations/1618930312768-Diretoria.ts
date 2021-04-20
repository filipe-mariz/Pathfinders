import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Diretoria1618960312768 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Diracao',
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
          name: 'nome',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'cargo',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'contato',
          type: 'varchar',
          isNullable: false
        },

        {
          name: 'userName',
          type: 'varchar',
          isNullable: false,
          isUnique: true
        },

        {
          name: 'password',
          type: 'varchar',
          isNullable: false
        }
      ]
    }))
        
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Diracao')
  }

}
