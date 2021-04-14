/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("applications", table => {
    table.bigIncrements("id")
    table.integer("userId").notNullable()
    table.integer("jobId").notNullable()
    table.string("resumeLink").notNullable()
    table.string("coverLetterLink")
    table.string("github")
    table.string("linkedin")
    table.string("phone")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => { return knex.schema.dropTableIfExists("applications") }
