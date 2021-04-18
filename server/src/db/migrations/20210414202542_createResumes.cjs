/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */

const tableName = "resumes"
exports.up = async (knex) => {
  return knex.schema.createTable(tableName, table => {
    table.bigIncrements("id")
    table.integer("userId").notNullable()
    table.string("name").notNullable()
    table.string("s3Link").notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists(tableName)
}
