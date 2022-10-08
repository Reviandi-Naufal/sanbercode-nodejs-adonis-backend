import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "bookings";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onDelete("RESTRICT");
      table.date("play_date_start");
      table.date("play_date_end");
      table
        .integer("field_id")
        .unsigned()
        .references("fields.id")
        .onDelete("RESTRICT");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
