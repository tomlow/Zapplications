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
    table.text("description").notNullable()
    table.integer("minSal")
    table.integer("maxSal")
    table.boolean("remote").notNullable()
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("jobs")
}


