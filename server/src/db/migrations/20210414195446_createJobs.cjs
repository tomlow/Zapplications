/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("jobs", table => {
    table.bigIncrements("id")
    table.string("title").notNullable()
    table.string("location").notNullable()
    table.string("department")
    table.string("level").notNullable()
    table.string("description", 1000).notNullable()
    table.integer("minSal")
    table.integer("maxSal")
    table.boolean("remote").notNullable()
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("jobs")
}
