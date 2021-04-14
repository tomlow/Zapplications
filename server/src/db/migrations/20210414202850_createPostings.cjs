/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */

const tableName
exports.up = async (knex) => {
  return knex.createTable(`${tableName}`, table => {
    table.bigIncrements("id")
    table.integer("userId").notNullable()
    table.integer("jobId").notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.dropTableIfExists(`${tableName}`)
}
